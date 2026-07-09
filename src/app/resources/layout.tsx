import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Growth Resources for CEOs & Founders",
  description:
    "Explore insights, tools, and strategies for CEOs and founders to scale businesses, improve leadership, and drive growth.",
  keywords:
    "business resources, CEO insights, founder tools, leadership strategies, business growth tips",
  alternates: {
    canonical: "https://www.success-alchemists.com/resources",
  },
  openGraph: {
    url: "https://www.success-alchemists.com/resources",
    title: "Business Growth Resources for CEOs & Founders",
    description:
      "Explore insights, tools, and strategies for CEOs and founders to scale businesses, improve leadership, and drive growth.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
