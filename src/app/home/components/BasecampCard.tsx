"use client";
import { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Double_arrow from "../images/Double_arrow.png";

// Lazy load Lottie component
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface BasecampCardProps {
  whatsNewAnimation: any;
}

const BasecampCard = memo(({ whatsNewAnimation }: BasecampCardProps) => {
  const [blink, setBlink] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setBlink((prev) => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="position-relative w-100 d-flex flex-column flex-md-row justify-content-between align-items-center p-4 text-white"
      style={{
        background: "linear-gradient(45deg, #418ef8, #018bd3, #418ef8)",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      {/* What's New Lottie Animation */}
      <div
        className={`position-absolute ${blink ? "opacity-100" : "opacity-75"}`}
        style={{
          top: "-5px",
          left: "-10px",
          transform: "rotate(-45deg)",
          width: "120px",
          height: "120px",
          transition: "opacity 0.3s ease-in-out",
          cursor: "pointer",
        }}
      >
        <a target="_blank" rel="noopener noreferrer">
          <Lottie
            animationData={whatsNewAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </div>

      {/* Left Text Section */}
      <div
        className="text-center text-md-start mb-3 mb-md-0"
        style={{ marginLeft: "60px" }}
      >
        <h2 className="inner_first_div mb-2">Basecamp</h2>
        <p className="inner_second_div mb-0">
          Unlock the frameworks to scale up your business.
        </p>
      </div>

      {/* Right Button */}
      <a
        href="/basecamp"
        className="text-decoration-none"
        style={{ textDecoration: "none" }}
      >
        <div
          className="d-flex align-items-center justify-content-center gap-2 px-4 px-md-5 px-lg-4 py-2 py-md-2 py-lg-3 rounded-4 bg-white mt-3 mt-md-0 me-md-1 me-lg-3"
          style={{
            color: "#007AFF",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "none",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          <span className="responsive-btn-text m-0">Attend the Workshop</span>
          <Image
            className="img-fluid"
            src={Double_arrow}
            alt="right"
            width={40}
            height={40}
            loading="lazy"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(34%) sepia(78%) saturate(3666%) hue-rotate(199deg) brightness(101%) contrast(110%)",
            }}
          />
        </div>
      </a>
    </div>
  );
});

BasecampCard.displayName = "BasecampCard";

export default BasecampCard;

