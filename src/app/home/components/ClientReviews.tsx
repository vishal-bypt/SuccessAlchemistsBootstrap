"use client";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import Curve_shape from "../images/Curve-shape.png";
import left_arrow_btn from "../images/left-arrow-btn.png";
import right_arrow_btn from "../images/right-arrow-btn.png";

// Import Swiper directly (it's already optimized by Next.js)
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    id: 1,
    title: "Nakul Toshiwal",
    designation: "Managing Director, Toshvin Analytical Pvt. Ltd.",
    description:
      "Nakul shares how the Scaling Up framework transformed execution across his 500-person, 35-location organization — turning strategy into disciplined, company-wide action.",
    // description:
    //   "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
    src: "https://www.youtube.com/embed/7gGuyD1QJ7o",
  },
  {
    id: 2,
    title: "Salil Sansare",
    designation: "Director & CEO, LabGuard India",
    description:
      "Sahil talks about breaking free of silos and firefighting — and how tools like the OPSP and weekly WWW meetings gave his leadership team one shared \"true north.\"",
    // description:
    //   "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
    src: "https://www.youtube.com/embed/szakdcX8Q9g",
  },
  {
    id: 3,
    title: "Ravin Mirchandani",
    designation: "Executive Chairperson, Ador Powertron",
    description:
      "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron.",
    // description:
    //   "Ravin Mirchandani, the Executive Chairperson talks about a remarkable success story about the impact of the Scaling Up performance system & the amazing business turnaround experienced within Ador Powertron. In the last section, Ravin talks about the things to keep in mind while selecting a good coach & the value added by the current coach.",
    src: " https://www.youtube.com/embed/mN0qCIfEr-8?si=cQHPlh9-GkF85pIe",
  },
  {
    id: 4,
    title: "Sunny Bhanushali",
    designation: "Founder & CEO, Aliens Tattoo",
    description:
      "In this video, Sunny Bhanushali the Founder & CEO of Aliens Tattoo talks about experiencing challenges of rapid growth, the biggest benefit of implementing a structured framework & the value added by their coach.",
    src: "https://www.youtube.com/embed/K1-7-5N2lzY?si=UFol7OgXkzBg_ImI",
  },
  {
    id: 5,
    title: "Rohit More",
    designation: "Director, Grauer & Weil",
    description:
      "Rohit More, the Director talks about the biggest benefits of implementing the Scaling Up framework. Besides ensuring alignment at every level within the organization, they clearly articulated their B-HAG (Big Hairy Audacious Goal) & have been systematically seeing growth YoY for the past 3 years.",
    // description:
    //   "Rohit More, the Director talks about the biggest benefits of implementing the Scaling Up framework. Besides ensuring alignment at every level within the organization, they clearly articulated their B-HAG (Big Hairy Audacious Goal) & have been systematically seeing growth YoY for the past 3 years. At the end, there is a reference to the Coach and the support provided in this growth journey.",
    src: "https://www.youtube.com/embed/UrIxZUvzovo?si=nrjwyoMuQsnzgUsz",
  },
  {
    id: 6,
    title: "Siddharth Motiwale",
    designation: "CEO, Clarion Technologies",
    description:
      "In this video, their CEO, Siddharth Motiwale talks about the 'secret sauce' which has helped Clarion grow systematically over the past few years. He also talks about the value added by Ajay as their coach.",
    src: "https://www.youtube.com/embed/jokpun-w7v8?si=8jz8BsXy1Ig62ULG",
  },
  {
    id: 7,
    title: "Girish Shilamkar",
    designation: "Founder & CEO, InfraCloud Technologies",
    description:
      "In this video, Girish Shilamkar, the Founder & CEO, shares some key aspects of the Scaling Up framework, which helped him build a great culture within his company. These foundations ultimately helped ensure a successful exit in 2025.",
    src: "https://www.youtube.com/embed/N4PUd0g_vDs?si=gP3asGFHOusha3bX",
  },
  {
    id: 8,
    title: "Jaymin Bhuptani",
    designation: "CEO, Uplers & Mavlers",
    description:
      "In this video, Jaymin (CEO) & Nital (COO) talk about the benefits of implementing the Scaling Up framework. They ensured alignment at all levels within their business & experienced the resultant growth.",
    src: "https://www.youtube.com/embed/8_HT9N82rh4?si=49oIAZ5JZzhLG0B5",
  },
  {
    id: 9,
    title: "Suvrajit Ghosh",
    designation: "CEO, Mount Meru Millers Uganda",
    description:
      "In this inspiring testimonial, Suvrajit Ghosh, CEO of Mount Meru Millers Uganda, shares how the Scaling Up framework has transformed their business growth and operations.",
    // description:
    //   "In this inspiring testimonial, Suvrajit Ghosh, CEO of Mount Meru Millers Uganda, shares how the Scaling Up framework has transformed their business growth and operations. He reveals the practical benefits and strategic advantages that helped Mount Meru Millers streamline processes, strengthen leadership, and accelerate success. Suvrajit highlights how weekly KPI reviews have aligned his team to the organization's key priorities, and how meeting rhythms have created clarity and accountability across the company. He also shares how these practices have saved him over 18 hours a week translating into thousands of dollars in value.",
    src: "https://www.youtube.com/embed/o-OwjN6PqBU",
  },
  {
    id: 10,
    title: "Chirag Savla",
    designation: "CEO, C1 Agri Cluster, Mount Meru Group",
    description:
      "Chirag Savla, CEO of C1 Agri Cluster, Mount Meru Group, shares the impactful journey his organisation had with the Scaling Up framework and the remarkable benefit it has had on their business.",
    // description:
    //   "Chirag Savla, CEO of C1 Agri Cluster, Mount Meru Group, shares the impactful journey his organisation had with the Scaling Up framework and the remarkable benefit it has had on their business. He highlights how the Power of One tool can drive significant improvements in the bottom line when applied effectively. Chirag also offers valuable insights for organizations new to Scaling Up, especially, what they should expect, and the key aspirations to keep in mind as they embark on this growth journey.",
    src: "https://www.youtube.com/embed/XDx0wO5wkzs",
  },
];

interface LazyYouTubeIframeProps {
  src: string;
  title: string;
  onClick: () => void;
  index: number;
}

const LazyYouTubeIframe = memo(({ src, title, onClick, index }: LazyYouTubeIframeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "50px",
    });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [handleIntersection]);

  return (
    <div ref={iframeRef} className="ratio ratio-16x9">
      {isVisible ? (
        <iframe
          src={src}
          className="home2-home-video"
          title={title}
          allowFullScreen={true}
          onClick={onClick}
          loading="lazy"
        ></iframe>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
});

LazyYouTubeIframe.displayName = "LazyYouTubeIframe";

const ClientReviews = memo(() => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const forward = useCallback(() => {
    if (currentIndex === items.length - 1) return;
    const nextIndex = currentIndex + 1;
    swiperRef.current?.swiper?.slideTo(nextIndex);
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const backward = useCallback(() => {
    if (currentIndex === 0) return;
    const prevIndex = currentIndex - 1;
    swiperRef.current?.swiper?.slideTo(prevIndex);
    setCurrentIndex(prevIndex);
  }, [currentIndex]);

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="container-fluid home2-client-review-section">
      <div className="section-title-white mb-4">Client Reviews</div>
      <div style={{ position: "relative" }}>
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={false}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {items.map((d, i) => (
            <SwiperSlide key={d.id}>
              <div className="row home2-slider-row">
                <div className="video col-md-4">
                  <LazyYouTubeIframe
                    src={d.src}
                    title={d.title}
                    onClick={() => handleClick(i)}
                    index={i}
                  />
                </div>
                <div className="video col-md-7 home2-video-detail-div">
                  <div className="home2-video-detail-div-title-text">{d.title}</div>
                  <div className="home2-video-detail-div-title-subText">{d.designation}</div>
                  <div className="white-subtitle-text subtitle-spacing">{d.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="img-fluid home2-navigation-buttons">
          <div onClick={backward}>
            <Image
              src={left_arrow_btn}
              className="img-fluid home2-nav-left-btn"
              alt="left arrow"
              loading="lazy"
            />
          </div>
          <div onClick={forward}>
            <Image
              src={right_arrow_btn}
              className="img-fluid home2-nav-right-btn"
              alt="right arrow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

ClientReviews.displayName = "ClientReviews";

export default ClientReviews;

