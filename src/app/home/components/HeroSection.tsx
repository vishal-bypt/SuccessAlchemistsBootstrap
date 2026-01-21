"use client";
import { memo } from "react";
import dynamic from "next/dynamic";

// Lazy load Typed.js
const TypedComponent = dynamic(() => import("./TypedComponent"), { ssr: false });

const HeroSection = memo(() => {
  return (
    <div className="video-wrapper">
      <video className="w-100 video-home" autoPlay loop muted playsInline preload="metadata">
        <source src="/Home-page-video.mp4" type="video/mp4" />
      </video>
      <div className="gradient-overlay">
        <div className="hero-container">
          <div className="inner_first_div">
            Are you ready to
            <br />
            have more
            <br />
            <TypedComponent />
            <br /> while doing business.
          </div>
          <div className="inner_second_div">
            Learn from India's first certified Scaling Up coach{" "}
            <span className="inner_second_div_span">Ajay Hiraskar </span>
            who has led the implementation of the Scaling Up performance
            platform across many industry verticals. This platform has already
            guided more than 80,000 companies world wide to succeed and grow.
          </div>
        </div>
      </div>
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

