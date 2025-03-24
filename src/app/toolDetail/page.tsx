import React from "react";
import "./toolDetail.css";
import Case1 from "./images/tools-final-08.png"
import Case2 from "./images/tools-final-09.png";
import Case3 from "./images/tools-final-10.png";
import Case4 from "./images/tools-final-11.png";
import Book1 from "../../app/resources/images/ref-book1.webp";
import Book2 from "../../app/resources/images/ref-book2.png";
import Book3 from "../../app/resources/images/ref-book3.png";
import Book4 from "../../app/resources/images/ref-book4.png";

import Image from "next/image";
import bluecurve from "./images/blue-curve.svg";
const page = () => {
    return (
        <div className="main_body_div">
            <div className="basecamp-hero-section">
                <Image className="blue-curve" src={bluecurve} alt="img2" />
                <div className="hero-content">

                    <p className="heading" style={{ color: "white" }}>
                        Toolkits
                    </p>
                    <p className="subText" style={{ color: "white" }}>
                        An interactive knowledge-sharing session with industry experts who
                        have implemented strategies, insights, and best practices for
                        business growth and transformation.
                    </p>


                </div>
            </div>
            <div className="second_div_layout">
                <div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header">People</p>
                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
                                    <Image src={Case2} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>FACe</h2>
                                        <p>Function Accountability Chart</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
                                    <Image src={Case1} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>OPPP</h2>
                                        <p>One Page Personal Plan</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                                    <Image src={Case3} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>PACe</h2>
                                        <p>Process Accountability Chart</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                                    <Image src={Case4} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>Talent</h2>
                                        <p>Talent Assessment Chart</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header">Strategy</p>

                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
                                    <Image src={Case2} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>Strategy</h2>
                                        <p>7 Strata</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
                                    <Image src={Case1} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>Strategy</h2>
                                        <p>Brand Promise</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                                    <Image src={Case3} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>OPSP</h2>
                                        <p>One Page Strategic Plan</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                                    <Image src={Case4} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>SWT</h2>
                                        <p>Strengths Weaknesses Trends</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header">Execution</p>

                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
                                    <Image src={Case2} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>WWW</h2>
                                        <p>Who What When</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
                                    <Image src={Case1} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>Execution</h2>
                                        <p>Rockefeller Habits Checklist</p>
                                    </div>
                                </a>
                            </div>                         

                        </div>
                    </div>
                </div>

                <div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header">Cash</p>

                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
                                    <Image src={Case2} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>CASh</h2>
                                        <p>Cash Acceleration Strategies</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
                                    <Image src={Case1} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>POO</h2>
                                        <p>The Power of One</p>
                                    </div>
                                </a>
                            </div>                         

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default page;
