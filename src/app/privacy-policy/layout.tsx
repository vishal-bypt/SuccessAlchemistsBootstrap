import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Success Alchemists",
  description:
    "Read the Success Alchemists Business Coaching Pvt Ltd Privacy Policy to understand how we collect, use, disclose, and protect your information.",
  alternates: {
    canonical: "https://www.success-alchemists.com/privacy-policy",
  },
  openGraph: {
    url: "https://www.success-alchemists.com/privacy-policy",
    title: "Privacy Policy | Success Alchemists",
    description:
      "Read the Success Alchemists Business Coaching Pvt Ltd Privacy Policy to understand how we collect, use, disclose, and protect your information.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
