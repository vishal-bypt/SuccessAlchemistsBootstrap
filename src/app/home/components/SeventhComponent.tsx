"use client";
import { memo, useState, useRef, useEffect } from "react";

interface LazyYouTubeVideoProps {
  src: string;
  title: string;
}

const LazyYouTubeVideo = memo(({ src, title }: LazyYouTubeVideoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="seventh_components_card_box">
      <div className="video-card">
        <div className="video-thumbnail">
          {isVisible ? (
            <iframe
              className="video-iframe"
              width="100%"
              height="200px"
              src={src}
              allow="autoplay; encrypted-media"
              loading="lazy"
              title={title}
            ></iframe>
          ) : (
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              Loading video...
            </div>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
});

LazyYouTubeVideo.displayName = "LazyYouTubeVideo";

const videos = [
  {
    src: "https://www.youtube.com/embed/PGgIAnehjR8",
    title: "Challenges of Scaling Up a Business",
  },
  {
    src: "https://www.youtube.com/embed/pDNju3Ookq4",
    title: "The 10 Rockefeller Habits To Success",
  },
  {
    src: "https://www.youtube.com/embed/048UdKxDsA8",
    title: "Scaling up - Anaheim Highlights",
  },
];

const SeventhComponent = memo(() => {
  return (
    <div className="seventh_components">
      <div className="row res-row">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4">
            <LazyYouTubeVideo src={video.src} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  );
});

SeventhComponent.displayName = "SeventhComponent";

export default SeventhComponent;

