import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Success Alchemists | Business Growth Experts",
  description:
    "Learn how Success Alchemists helps CEOs and founders scale businesses through strategy, coaching, and execution frameworks.",
  keywords:
    "about Success Alchemists, business experts, CEO coaching, growth consulting, business strategy",
  alternates: {
    canonical: "https://www.success-alchemists.com/about",
  },
  openGraph: {
    url: "https://www.success-alchemists.com/about",
    title: "About Success Alchemists | Business Growth Experts",
    description:
      "Learn how Success Alchemists helps CEOs and founders scale businesses through strategy, coaching, and execution frameworks.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
