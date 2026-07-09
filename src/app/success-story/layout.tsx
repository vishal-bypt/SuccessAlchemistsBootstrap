import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Success Stories | Business Growth Results",
  description:
    "Discover how CEOs and founders achieved growth, profitability, and scale with Success Alchemists' consulting and coaching.",
  keywords:
    "client success stories, business growth results, founder success, profitability, scaling companies",
  alternates: {
    canonical: "https://www.success-alchemists.com/success-story",
  },
  openGraph: {
    url: "https://www.success-alchemists.com/success-story",
    title: "Client Success Stories | Business Growth Results",
    description:
      "Discover how CEOs and founders achieved growth, profitability, and scale with Success Alchemists' consulting and coaching.",
  },
};

export default function SuccessStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
