import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Growth & CEO Coaching Services | Success Alchemists",
  description:
    "Scale your business with expert CEO coaching, strategy, and growth consulting. Success Alchemists help founders and companies achieve sustainable growth.",
  keywords:
    "CEO Coaching Services, business coaching, business growth, CEO coaching, business strategy, growth consulting, founders, scaling business, leadership, scaling business consulting",
  openGraph: {
    title: "Business Growth & CEO Coaching Services | Success Alchemists",
    description:
      "Scale your business with expert CEO coaching, strategy, and growth consulting. Success Alchemists help founders and companies achieve sustainable growth.",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
