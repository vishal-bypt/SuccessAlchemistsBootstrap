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
    <div className="fourth_component">
      <Image
        src={idea_icon}
        className="img-fluid bulb-image"
        alt="idea icon"
        loading="lazy"
      />

      <div className="fourth_component_first_div">
        <div className="fourth_component_title_div">
          We become successful, when we help you become successful
        </div>
        <div className="fourth_component_p_tag col-md-12">
          At Success Alchemists, we believe that our success is tied to yours.
          If you're a CEO seeking to deliver accelerated growth, augmented
          value, and a simplified business model, our experienced Scaling Up
          Coaches are here to help. Scaling up requires a significant shift in
          management thinking, and while the path may seem simple, it often
          involves a steep learning curve.
        </div>

        <div className="fourth_component_p_tag col-md-12">
          Leveraging proven methods that have empowered over 2,700 firms
          worldwide, we provide business coaching, management development, and
          organizational change strategies to propel your business onto an
          unparalleled growth trajectory.
        </div>
        <div className="fourth_component_p_tag col-md-12">
          For the business owner developing strategy, fixing cultural issues
          and differentiating in complex markets, business coaching can deliver
          agility, clarity and commitment in four main areas:
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
          <div className="unselected_box unselected_box1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="unselected_box_card_title">People</div>
              <Image
                src={people_icon}
                className="img-fluid growth-icon"
                alt="people icon"
                loading="lazy"
              />
            </div>
            <div className="unselected_box_text">
              Get the right people in the right seats, aligned with culture and
              strategy.
            </div>
            <div className="bottom_arrow_div"></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="unselected_box unselected_box2">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="unselected_box_card_title">Strategy</div>
              <Image
                src={market_analysis}
                className="img-fluid growth-icon"
                alt="strategy icon"
                loading="lazy"
              />
            </div>
            <div className="unselected_box_text">
              Develop a clear, differentiated, and scalable plan for sustainable
              growth.
            </div>
            <div className="bottom_arrow_div"></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="unselected_box unselected_box3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="unselected_box_card_title">Execution</div>
              <Image
                src={execution_icon}
                className="img-fluid growth-icon"
                alt="execution icon"
                loading="lazy"
              />
            </div>
            <div className="unselected_box_text">
              Drive disciplined processes to ensure flawless implementation and
              accountability.
            </div>
            <div className="bottom_arrow_div"></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="unselected_box unselected_box4">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="unselected_box_card_title">Cash</div>
              <Image
                src={money_icon}
                className="img-fluid growth-icon"
                alt="cash icon"
                loading="lazy"
              />
            </div>
            <div className="unselected_box_text">
              Maintain strong cash flow to fuel growth and avoid financial
              constraints.
            </div>
            <div className="bottom_arrow_div"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

FourthComponent.displayName = "FourthComponent";

export default FourthComponent;

