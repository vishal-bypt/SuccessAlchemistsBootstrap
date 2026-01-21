// app/components/ReviewsSection.tsx
"use client";

import dynamic from "next/dynamic";

const SwiperReviews = dynamic(
  () => import("./SwiperReviews"),
  { ssr: false, loading: () => <SkeletonReviews /> }
);

export default function ReviewsSection() {
  return <SwiperReviews />;
}
