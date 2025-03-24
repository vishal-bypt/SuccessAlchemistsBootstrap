import Image from "next/image";
import curve1 from "../../../../src/app/about/images/curve1.png";
import bluecurve from "../basecamp/Images/blue-curve.svg";
import basecamplogo2 from "../podcast/images/Pathfinders_White.png";
import "./podcast.css";
const page = () => {
  return (
    <div className="main_body_div">
      {/* <div className="first_div_layout podcast">
                <div className="main_first_div_body">
                    <div
                        className="innerContainer"
                        style={{ justifyContent: "center", alignItems: "center" }}
                    >
                        <p className="heading" style={{ color: "white" }}>
                            Pathfinder podcast
                        </p>
                        <p className="subText" style={{ color: "white" }}>
                        A podcast series where we delve into the inspiring journeys of successful business leaders, founders, and CEOs of Small and Medium-sized enterprises. 

                        </p>
                    </div>
                </div>
            </div> */}
      <div className="basecamp-hero-section">
        <Image className="blue-curve" src={bluecurve} alt="img2" />
        <div className="hero-content">
        <div className="hero-icon-img">
            <Image className="logo-image" src={basecamplogo2} alt="img2" />
          </div>
          <p className="heading" style={{ color: "white" }}>
          Pathfinders Podcast
          </p>
          <p className="subText" style={{ color: "white" }}>
          A podcast series where we delve into the inspiring journeys of successful business leaders, founders, and CEOs of Small and Medium-sized enterprises. 
          </p>
        </div>
      </div>
      <div className="seventh_components shadow-lg">
        <div className="row row-gap">
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/bSagpoZ6hBU?si=d4x_SzpLhOerX-s-"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                  Success Alchemists Pathfinders
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/0-mZlURLCY4?si=uEvJ1ryjYWKtFw-C"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                   Mentoring Startups towards success
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dr2DmRlXcfI?si=efBN6dN1RM4Ejjd2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                  Entrepreneurial insights from fintech leader
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/40vkg5IaYZQ?si=eFgML20s-fUgbC-z"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Beyond the algorithm : A DEEP DIVE
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/XEXvnhB3akU?si=wvMHUuimDx87PQG8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Industry Pioneer : Continued Learning and consistency
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/ughFwXg8Cdw?si=0MSwr2mpIPXowiBO"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Every successful entrepreneur is a marathoner
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/LKJ9oNABO7c?si=o4GJEh_NQ02JM5KW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    4 decades.Many stories.Lots of inspiration
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/brOOsc6GIhI?si=sbefzUJDLVvLUELt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    AGRITECH : The next big money spinner{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/fOLCO-noL8k?si=o-zzfUy6aH-GJ8xQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Weikfield : "A story full of inspiration"
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/cVDrMk1mP4M?si=EaUuVvWkzRcik5_1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Serial entrepreneur, BNI, Clicktrails and so much more
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/TL4acYFGXOc?si=RPJPsP9tcCnZCm2H"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Million Miles Million Smiles </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/PEiRKO31E3Y?si=0cMuHj9UvHCeEFMt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">When innovation meets authenticity !</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/17LdpOzH5wc?si=wMFZBy35UkFoWvvA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Biotech lifesciences india marching ahead
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="seventh_components_card_box">
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe
                    className="podcast-iframe"
                    width="100%"
                    height="200px"
                    src="https://www.youtube.com/embed/M3mQhJ_gItg?si=2dLSneD3wZbXwsyD"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">The 3th on way to success</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third_div_layout shadow-lg">
        <Image src={curve1} alt="curve1" className="image3 img-fluid" />
        <div className="row align-items-center">
          <div className="col-md-12">
            <p
              className="subText webinar-sub-text mt-0"
              style={{ color: "white", width: "100%" }}
            >
              Success Alchemists' Pathfinder is a captivating podcast series
              that delves into the journeys of successful business owners,
              founders, CEOs, and professionals from small and medium-sized
              enterprises. Through in-depth interviews, we explore the
              challenges they have faced, the valuable lessons they've learned,
              and the innovative strategies they've employed to overcome
              obstacles and achieve remarkable success. Each episode offers
              listeners unique insights and inspiration, fostering a deeper
              understanding of the entrepreneurial landscape and the resilience
              required to thrive in today’s competitive environment. Join us as
              we uncover the stories behind the success of these inspiring
              leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
