"use client";
import { memo } from "react";
import dynamic from "next/dynamic";

// Lazy load Typed.js
const TypedComponent = dynamic(() => import("./TypedComponent"), { ssr: false });

const HeroSection = memo(() => {
  return (
    // <div>sd</div>
    <div className="home2-video-wrapper">
      <video className="w-100 home2-video-home" autoPlay loop muted playsInline preload="metadata">
        <source src="/Home-page-video.mp4" type="video/mp4" />
      </video>
      <div className="home2-gradient-overlay">
        <div className="home2-hero-container">
          <div className="home2-inner-first-div">
            Are you ready for
            <br />
            <TypedComponent />
            <br /> while doing business.
          </div>
          <div className="white-subtitle-text">
            India’s 1st Scaling-Up Coach, Ajay Hiraskar & his team of seasoned business coaches can help you achieve your ambitious business goals while building up your organization to sustain that scale and speed.
          </div>
        </div>
      </div>
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

