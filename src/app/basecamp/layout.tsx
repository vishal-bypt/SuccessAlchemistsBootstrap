import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Growth Programs for CEOs | Success Alchemists",
  description:
    "Join our growth programs designed for CEOs and founders to scale businesses, improve execution, and achieve long-term success.",
  keywords:
    "business growth programs, CEO programs, founder coaching, leadership growth, business execution, scaling companies",
  openGraph: {
    title: "Business Growth Programs for CEOs | Success Alchemists",
    description:
      "Join our growth programs designed for CEOs and founders to scale businesses, improve execution, and achieve long-term success.",
  },
};

export default function BasecampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
