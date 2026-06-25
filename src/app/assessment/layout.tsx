import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Growth Assessment for CEOs & Founders",
  description:
    "Evaluate your business performance and growth potential with our assessment designed for CEOs and scaling companies.",
  keywords:
    "business assessment, growth potential, CEO tools, scaling business, performance evaluation",
  openGraph: {
    title: "Business Growth Assessment for CEOs & Founders",
    description:
      "Evaluate your business performance and growth potential with our assessment designed for CEOs and scaling companies.",
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
