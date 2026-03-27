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
      className="home2-wrapper"
      style={{ display: "flex", flexDirection: "column" }}
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

     {/* UNLOCK SECTION */}
      <section className="home2-unlock-section">
        <div className="container">
          <h2 className="section-title-black">Unlock The Power Of Scaling Up</h2>
          <div className="row">
            <div className="col-md-3 d-none d-md-block">&nbsp;</div>
            <div className="col-md-6">
              <p className="black-subtitle-text text-center">
                Success Alchemists leverage the Scaling Up framework{" "}
                <br className="d-none d-md-block" />- which is a globally proven
                framework - to grow <br className="d-none d-md-block" />
                businesses exponentially & sustainably.
              </p>
            </div>            
          </div>
           <div className="col-md-3 d-none d-md-block">&nbsp;</div>
          <div className="row">
            <div className="col-md-3">&nbsp;</div>
            <div className="col-md-6">
              <p className="black-subtitle-text text-center">
                In the Basecamp 1-day workshop, we deep dive into the{" "}
                <br className="d-none d-md-block" />4 pillars of a business –
                <strong> People, Strategy, Execution & </strong>
                <br className="d-none d-md-block" />
                <strong>Cash</strong> – and teach you how to use Scaling Up to
                drive <br className="d-none d-md-block" />
                your next big decision(s) to scale your business.
              </p>
            </div>
          </div>
          <div className="row home2-metrics-container">
            <div className="col-md-4 col-12">
              <div className="home2-metric-box">
                <div className="home2-metric-value">100K +</div>
                <div className="home2-metric-label">Companies Worldwide</div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="home2-metric-box">
                <div className="home2-metric-value">10X</div>
                <div className="home2-metric-label">Valuations Multiplied</div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="home2-metric-box">
                <div className="home2-metric-value">3X</div>
                <div className="home2-metric-label">Profitability Increased</div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  {/* CTA SECTION */}

        <section className="home2-hero-section-footer-webinar">
    <div className="home2-webinar-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8 col-md-12 col-12 order-lg-1 order-1">
          <div className="home2-hero-content-footer-webinar text-center">
            <h3 className="d-none d-md-block">
              Are You <br />
              <span>Ready To Scale?</span>
            </h3>
            <h3 className="d-block d-md-none">
              Are You <span>Ready To Scale?</span>
            </h3>
            <p >
              {/* <a href="/contactUs" className="text-decoration-none"> */}
              <button className=" home2-btn-cta-footer-webinar text-center"  onClick={() => window.location.href = "/contactUs"}>
                <strong>REQUEST A CALLBACK</strong>
              </button>
              {/* </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
        </section>

    </div>
  );
};

export default Home;
