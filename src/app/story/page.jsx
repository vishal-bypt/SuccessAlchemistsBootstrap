"use client";
import React, { useState } from "react";
import { memo } from "react";
import "./story.css";

const caseStudies = [
  {
    title:
      "A _____ company's revenue grew from Rs 50 Cr to Rs 175 Cr within 3 years",
    startingSituation:
      "The company revenue had plateaued around 50 crores for the previous 5 years",
    coreIssues:
      "Missing Leadership alignment & Execution discipline",
    coachingIntervention:
      "We implemented tools and processes like the OPSP, PACe, KPIs",
    outcomes: [
      "The company moved away from bidding for very small projects",
      "Better internal coordination, thereby delivering projects on time with minimal cost overruns",
      "Improvement in internal processes leading to cost savings",
      "The company revenue grew to 175 crores within 3 years",
    ],
    clientQuote: {
      text: "“2 sentences”",
      name: "—Name",
    },
  },
  {
    title:
      "A manufacturing company's profit margin improved from 8% to 22% within 2 years",
    startingSituation:
      "The company was generating stable revenue, but profit margins remained very low due to operational inefficiencies and increasing project costs.",
    coreIssues:
      "Lack of process standardization, poor accountability, and ineffective project tracking.",
    coachingIntervention:
      "We introduced structured review systems, KPI dashboards, accountability frameworks, and leadership alignment workshops.",
    outcomes: [
      "Improved operational efficiency across departments",
      "Better cost control and resource management",
      "Faster project delivery timelines",
      "Significant reduction in wastage and overhead expenses",
      "Profit margin improved from 8% to 22% within 2 years",
    ],
    clientQuote: {
      text: "“2 sentences”",
      name: "—Name",
    },
  },
  {
    title:
      "An IT services company's employee retention improved from 60% to 90% within 18 months",
    startingSituation:
      "The company faced high employee attrition, inconsistent team performance, and challenges in scaling operations.",
    coreIssues:
      "Weak organizational culture, lack of leadership communication, and unclear employee growth paths.",
    coachingIntervention:
      "We implemented leadership coaching, team accountability systems, employee engagement initiatives, and structured performance management processes.",
    outcomes: [
      "Stronger leadership communication and team collaboration",
      "Improved employee engagement and workplace culture",
      "Clear performance tracking and career development plans",
      "Higher client satisfaction due to stable delivery teams",
      "Employee retention improved from 60% to 90% within 18 months",
    ],
    clientQuote: {
      text: "“2 sentences”",
      name: "—Name",
    },
  },
];

const Story = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="story-main">
      {/* HERO */}
      <section className="story-hero">
        <video className="story-hero-video" autoPlay loop muted playsInline preload="metadata">
          <source src="/Home-page-video.mp4" type="video/mp4" />
        </video>
        <div className="story-hero-gradient-overlay"></div>
        <div className="story-hero-inner">
          <h1 className="story-hero-title">
            REAL BUSINESSES,
            <br />
            REAL IMPACT
          </h1>
          <p className="story-hero-text">
            We deliver Accelerated growth, Augmented value and Simplified business across geographies, sectors and domains to our clients.
          </p>

          <div className="story-stats">
            <div className="story-stat">
              <div className="story-stat-value">50+</div>
              <div className="story-stat-label">BUSINESSES COACHED</div>
            </div>
            <div className="story-stat">
              <div className="story-stat-value">$2 Bn+</div>
              <div className="story-stat-label">
                ANNUAL TURNOVER OF
                <br />
                BUSINESSES WE COACH
              </div>
            </div>
            <div className="story-stat">
              <div className="story-stat-value">800+</div>
              <div className="story-stat-label">LEADERS IMPACTED</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="story-cases">
        <div className="story-cases-inner">
          <h2 className="section-title-white mb-3">Case Studies</h2>

          <div className="story-cards">
            {caseStudies.map((cs, i) => (
              <article key={i} className="story-card">
                <h3 className="story-card-title">{cs.title}</h3>

                <div className="story-card-section mt-4">
                  <h4>The Starting Situation</h4>
                  <p>{cs.startingSituation}</p>
                </div>

                <div className="story-card-section">
                  <h4>Core Issues Identified</h4>
                  <p>{cs.coreIssues}</p>
                </div>

                {isExpanded && (
                  <>
                    <div className="story-card-section">
                      <h4>Coaching Intervention</h4>
                      <p>{cs.coachingIntervention}</p>
                    </div>

                    <div className="story-card-section">
                      <h4>AFTER: Outcomes &amp; Results</h4>
                      <ol type="a" className="story-card-outcomes">
                        {cs.outcomes.map((o, idx) => (
                          <li key={idx}>{o}</li>
                        ))}
                      </ol>
                    </div>

                    {/* <div className="story-card-section">
                      <h4>Client Quote</h4>
                      <p className="story-card-quote">{cs.clientQuote.text}</p>
                      <p className="story-card-quote-name">
                        {cs.clientQuote.name}
                      </p>
                    </div> */}
                  </>
                )}

                <div className="story-card-actions">
                  <button
                    type="button"
                    className="story-readmore"
                    onClick={toggle}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="story-hero-section-footer-webinar">
        <div className="story-webinar-container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12 col-12 order-lg-1 order-1">
              <div className="story-hero-content-footer-webinar text-center">
                <h3 className="d-none d-md-block">
                  Are You <br />
                  <span>Ready To Scale?</span>
                </h3>
                <h3 className="d-block d-md-none">
                  Are You <span>Ready To Scale?</span>
                </h3>
                <p>
                  <button
                    className="story-btn-cta-footer-webinar text-center"
                    onClick={() => (window.location.href = "/basecamp")}
                  >
                    <span className="story-btn-cta-top">
                      LIMITED SPOTS AVAILABLE
                    </span>
                    <strong>REGISTER NOW FOR BASECAMP</strong>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Story.displayName = "Story";

export default Story;
