"use client";
import { memo } from "react";
import Image from "next/image";
import idea_icon from "../images/idea_icon.png";
import people_icon from "../images/people_icon.png";
import market_analysis from "../images/market_analysis.png";
import execution_icon from "../images/execution_icon.svg";
import money_icon from "../images/money_icon.png";

const FourthComponent = memo(() => {
  return (
    <div className="home2-fourth-component">
      <Image
        src={idea_icon}
        className="img-fluid home2-bulb-image "
        alt="idea icon"
        loading="lazy"
      />

      <div className="home2-fourth-component-first-div">
        <div className="section-title-black text-left ">
          Not Just Coaching...
We Help With Implementation
        </div>
        <div className="grey-subtitle-text col-md-12 mb-1">
          Your company is growing, but it's also becoming increasingly unstable. Your team is not aligning with your vision, need for speed and scaling-up dreams.
        </div>

        <div className="grey-subtitle-text col-md-12 mb-1">
          That's where we come in.
        </div>
        <div className="grey-subtitle-text col-md-12 mb-1">
          We help your leadership team shift their mindset, align with the larger vision, and deliver superlative growth by using the concepts, frameworks and tools of Scaling Up & beyond.
        </div>
        <div className="grey-subtitle-text col-md-12 mb-1">
          We serve as your sounding board, partners in strategy development, and facilitators for fixing cultural issues in the organization..
        </div>
        <div className="grey-subtitle-text col-md-12 mb-1">
          Our business coaching methology builds clarity, agility and commitment along the 4 pillars of growth:
        </div>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          rowGap: "16px",
          alignItems: "center",
          height: "max-content",
        }}
      >
        <div className="col-md-6 col-lg-3">
          <div className="home2-unselected-box home2-unselected-box1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="home2-unselected-box-card-title">People</div>
              <Image
                src={people_icon}
                className="img-fluid home2-growth-icon"
                alt="people icon"
                loading="lazy"
              />
            </div>
            <div className="home2-unselected-box-text">
              Get the right people in the right seats, aligned with culture and
              strategy.
            </div>
            <div className="home2-bottom-arrow-div"></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="home2-unselected-box home2-unselected-box2">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="home2-unselected-box-card-title">Strategy</div>
              <Image
                src={market_analysis}
                className="img-fluid home2-growth-icon"
                alt="strategy icon"
                loading="lazy"
              />
            </div>
            <div className="home2-unselected-box-text">
              Develop a clear, differentiated, and scalable plan for sustainable
              growth.
            </div>
            <div className="home2-bottom-arrow-div"></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="home2-unselected-box home2-unselected-box3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="home2-unselected-box-card-title">Execution</div>
              <Image
                src={execution_icon}
                className="img-fluid home2-growth-icon"
                alt="execution icon"
                loading="lazy"
              />
            </div>
            <div className="home2-unselected-box-text">
              Drive disciplined processes to ensure flawless implementation and
              accountability.
            </div>
            <div className="home2-bottom-arrow-div"></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="home2-unselected-box home2-unselected-box4">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="home2-unselected-box-card-title">Cash</div>
              <Image
                src={money_icon}
                className="img-fluid home2-growth-icon"
                alt="cash icon"
                loading="lazy"
              />
            </div>
            <div className="home2-unselected-box-text">
              Maintain strong cash flow to fuel growth and avoid financial
              constraints.
            </div>
            <div className="home2-bottom-arrow-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

FourthComponent.displayName = "FourthComponent";

export default FourthComponent;

