"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Karla } from "next/font/google";
import Toast from "./Toast";
import "./LeadPopup.css";

const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "600"] });

const BASECAMP_PATH = "/basecamp";
const GENERAL_DELAY_MS = 5000;
const BASECAMP_DELAY_MS = 15000;
const GENERAL_SHOWN_KEY = "sa_popup_shown_general";
const BASECAMP_SHOWN_KEY = "sa_popup_shown_basecamp";

type Variant = "general" | "basecamp";

const COPY: Record<Variant, { headline: string; subhead: string; button: string }> = {
  general: {
    headline: "Get the Scaling Up Toolkit — Free",
    subhead:
      "Grab the exact toolkit we use with founders scaling from ₹10Cr to ₹100Cr+ — the frameworks for fixing cash, strategy, people and execution. You'll also get added to our weekly newsletter, straight to your inbox, no fluff.",
    button: "GET THE TOOLKIT",
  },
  basecamp: {
    headline: "Still Deciding on Basecamp?",
    subhead:
      "Let us make it easy: leave your details, and one of our coaches will walk you through what Basecamp covers, whether it's the right fit for your stage, and answer anything that's holding you back.",
    button: "TALK TO A COACH",
  },
};

const isInternalNavClick = (e: MouseEvent) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const anchor = (e.target as HTMLElement)?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return null;
  const url = new URL(anchor.href, window.location.origin);
  if (url.origin !== window.location.origin) return null;
  return url.pathname + url.search;
};

export default function LeadPopup() {
  const pathname = usePathname();
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [variant, setVariant] = useState<Variant | null>(null);
  const pendingHrefRef = useRef<string | null>(null);
  const isBasecamp = pathname === BASECAMP_PATH;

  useEffect(() => {
    if (isBasecamp) return;
    if (sessionStorage.getItem(GENERAL_SHOWN_KEY)) return;

    const timer = setTimeout(() => setVariant("general"), GENERAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname, isBasecamp]);

  useEffect(() => {
    if (!isBasecamp || sessionStorage.getItem(BASECAMP_SHOWN_KEY)) return;

    const timer = setTimeout(() => setVariant("basecamp"), BASECAMP_DELAY_MS);

    const onClick = (e: MouseEvent) => {
      const nextPath = isInternalNavClick(e);
      if (!nextPath || nextPath === BASECAMP_PATH) return;
      e.preventDefault();
      pendingHrefRef.current = nextPath;
      setVariant("basecamp");
    };
    document.addEventListener("click", onClick, true);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onClick, true);
    };
  }, [isBasecamp]);

  const close = (navigateAway: boolean) => {
    if (variant) sessionStorage.setItem(variant === "general" ? GENERAL_SHOWN_KEY : BASECAMP_SHOWN_KEY, "1");
    setVariant(null);
    reset();
    if (navigateAway && pendingHrefRef.current) {
      router.push(pendingHrefRef.current);
    }
    pendingHrefRef.current = null;
  };

  const onSubmit = async (formData: any) => {
    if (!executeRecaptcha) {
      return Toast.error("Security verification is not ready. Please try again.");
    }
    if (formData.website?.trim()) {
      return Toast.error("Spam detected.");
    }

    try {
      const recaptchaToken = await executeRecaptcha("popup_lead");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/popup-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: variant,
          page: pathname,
          recaptchaToken,
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        return Toast.error(result?.message || "Failed to submit. Please try again.");
      }

      Toast.success("Thanks! We'll be in touch shortly.");
      close(true);
    } catch (error: any) {
      Toast.error(error.message || "Something went wrong. Please try again later.");
    }
  };

  if (!variant) return null;
  const copy = COPY[variant];

  return (
    <Modal show centered onHide={() => close(true)} className={`lead-popup-modal ${karla.className}`}>
      <Modal.Body>
        <button type="button" className="lead-popup-close" aria-label="Close" onClick={() => close(true)}>
          ×
        </button>
        <div className="lead-popup-inner">
        <h3 className="lead-popup-headline">{copy.headline}</h3>
        <p className="lead-popup-subhead">{copy.subhead}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="lead-popup-form">
          <input
            className="lead-popup-input"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <div className="lead-popup-error">Name is required</div>}

          <input
            className="lead-popup-input"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && <div className="lead-popup-error">Valid email is required</div>}

          {variant === "basecamp" && (
            <>
              <input
                className="lead-popup-input"
                type="tel"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && <div className="lead-popup-error">Phone is required</div>}
            </>
          )}

          <input
            className="lead-popup-input"
            placeholder="Company Name"
            {...register("company", { required: true })}
          />
          {errors.company && <div className="lead-popup-error">Company name is required</div>}

          <input
            type="text"
            {...register("website")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
          <input type="hidden" {...register("formLoadTime", { value: Date.now().toString() })} />

          <button type="submit" className="lead-popup-submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : copy.button}
          </button>
        </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
