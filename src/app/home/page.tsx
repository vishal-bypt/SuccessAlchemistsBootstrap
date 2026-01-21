"use client";
import { useState, Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import "./home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Lazy load components
const BasecampCard = dynamic(() => import("./components/BasecampCard"), {
  ssr: false,
  //loading: () => <div style={{ minHeight: "100px" }}>Loading...</div>,
});

const HeroSection = dynamic(() => import("./components/HeroSection"), {
  ssr: true, // Hero section should be SSR for SEO
});

const LogoCarousel = dynamic(() => import("./components/LogoCarousel"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "200px" }}>Loading...</div>,
});

const ClientReviews = dynamic(() => import("./components/ClientReviews"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }}>Loading...</div>,
});

const FourthComponent = dynamic(() => import("./components/FourthComponent"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "300px" }}>Loading...</div>,
});

const SixthComponent = dynamic(() => import("./components/SixthComponent"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "300px" }}>Loading...</div>,
});

const SeventhComponent = dynamic(() => import("./components/SeventhComponent"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "300px" }}>Loading...</div>,
});

// Lazy load Lottie animation data
let whatsNewAnimation: any = null;
const loadWhatsNewAnimation = async () => {
  if (!whatsNewAnimation) {
    whatsNewAnimation = (await import("./animations/new_Label.json")).default;
  }
  return whatsNewAnimation;
};

const Home = () => {
  const [visible, setVisible] = useState(true);
  const [whatsNewData, setWhatsNewData] = useState<any>(null);

  // Load animation data on mount
  useEffect(() => {
    loadWhatsNewAnimation().then(setWhatsNewData);
  }, []);

  return (
    <div
      className="hero-section box-shadow"
      style={{ display: "flex", gap: "16px", flexDirection: "column" }}
    >
      {/* Basecamp Card */}
      {/* {visible && whatsNewData && (
        
      )} */}
      <BasecampCard whatsNewAnimation={whatsNewData} />

      {/* Hero Section */}
      {/* <Suspense fallback={<div style={{ minHeight: "600px" }}>Loading...</div>}>
        
      </Suspense> */}
      <HeroSection />

      {/* Logo Carousel */}
      <Suspense fallback={<div style={{ minHeight: "200px" }}>Loading...</div>}>
        <LogoCarousel />
      </Suspense>

      {/* Client Reviews */}
      <Suspense fallback={<div style={{ minHeight: "400px" }}>Loading...</div>}>
        <ClientReviews />
      </Suspense>

      {/* Fourth Component */}
      <Suspense fallback={<div style={{ minHeight: "300px" }}>Loading...</div>}>
        <FourthComponent />
      </Suspense>

      {/* Sixth Component */}
      <Suspense fallback={<div style={{ minHeight: "300px" }}>Loading...</div>}>
        <SixthComponent />
      </Suspense>

      {/* Seventh Component */}
      <Suspense fallback={<div style={{ minHeight: "300px" }}>Loading...</div>}>
        <SeventhComponent />
      </Suspense>
    </div>
  );
};

export default Home;
