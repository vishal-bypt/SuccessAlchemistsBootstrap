import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Business Growth Experts | Success Alchemists",
  description:
    "Connect with our experts for CEO coaching, business strategy, and growth consulting. Let's scale your company with proven frameworks.",
  keywords:
    "contact business coach, CEO coaching, business consulting, growth experts, strategy consulting, Success Alchemists",
  openGraph: {
    title: "Contact Business Growth Experts | Success Alchemists",
    description:
      "Connect with our experts for CEO coaching, business strategy, and growth consulting. Let's scale your company with proven frameworks.",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
