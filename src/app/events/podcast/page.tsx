import React from "react";
import "./podcast.css";
import Image from "next/image";
import blogimg1 from "../../../../public/assets/images/Blog-img.png";
import curve1 from "../../../../src/app/about/images/curve1.png";
import idea_icon from "../../../app/about/images/idea_icon.png"
const page = () => {
    return (
        <div className="main_body_div">

            <div className="seventh_components shadow-lg">
                <div className="row">
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/PGgIAnehjR8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Challenges of Scaling Up a Business
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/pDNju3Ookq4"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        The 10 Rockefeller Habits To Success
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seventh_components_card_box">
                            <div className="card video-card">
                                <div className="video-thumbnail">
                                    <iframe
                                        width="100%"
                                        height="200px"
                                        src="https://www.youtube.com/embed/048UdKxDsA8"
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">ScaleUp - Anaheim Highlights</h5>
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
                        <p className="subText webinar-sub-text mt-0" style={{ color: "white", width: "100%" }}>
                            Success Alchemists' Pathfinder is a captivating podcast series that delves into the journeys of successful business
                            owners, founders, CEOs, and professionals from small and medium-sized enterprises. Through in-depth interviews, we explore the challenges they have faced, the valuable lessons they've learned, and the innovative strategies they've employed to overcome obstacles and achieve remarkable success. Each episode offers listeners unique insights and inspiration, fostering a deeper understanding of the entrepreneurial landscape and the resilience required to thrive in today’s competitive environment. Join us as we uncover the stories behind the success of these inspiring leaders.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default page;
