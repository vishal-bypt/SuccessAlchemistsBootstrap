import React from "react";
import "./toolDetail.css";
import People1 from "./images/People - FACe.jpg"
import People2 from "./images/People-OPPP.jpg";
import People3 from "./images/People-PACe.jpg";
import People4 from "./images/People-Talent.jpg";
import Strategy1 from "./images/Strategy-7Strata.jpg";
import Strategy2 from "./images/Strategy-Brand Promise.jpg";
import Strategy3 from "./images/Strategy-Vision.jpg";
import Strategy4 from "./images/Strategy-SWT.jpg";
import Execution1 from "./images/Execution-WWW.jpg"
import Execution2 from "./images/Execution- Rockefeller.jpg"
import Cash1 from "./images/Cash-CASh.jpg"
import Cash2 from "./images/Cash-POO.jpg"


import Image from "next/image";
import bluecurve from "./images/blue-curve.svg";
import Link from "next/link";
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
                        <p className="section-header-tool">People</p>
                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" href="toolDetail/Function-Accountability-Chart">
                                    <Image src={People1} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>FACe</h2>
                                        <p>Function Accountability Chart</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - OPPP - One Page Personal Plan.pdf">
                                    <Image src={People2} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>OPPP</h2>
                                        <p>One Page Personal Plan</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - FACe - Function Accountability Chart.pdf">
                                    <Image src={People3} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>PACe</h2>
                                        <p>Process Accountability Chart</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <a className="tool-img-link" target="_blank" href="../../../assets/images/PDF/People - Talent Assessment Chart.pdf">
                                    <Image src={People4} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>Talent</h2>
                                        <p>Talent Assessment Chart</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header-tool">Strategy</p>

                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Strategy - 7 Strata.pdf">
                                    <Image src={Strategy1} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>Strategy</h2>
                                        <p>7 Strata</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Strategy - Brand Promise.pdf">
                                    <Image src={Strategy2} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>Strategy</h2>
                                        <p>Brand Promise</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Strategy - OPSP - One Page Strategic Plan.pdf">
                                    <Image src={Strategy3} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>OPSP</h2>
                                        <p>One Page Strategic Plan</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Strategy - SWT - Strengths Weaknesses Trends.pdf">
                                    <Image src={Strategy4} alt="case3" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>SWT</h2>
                                        <p>Strengths Weaknesses Trends</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header-tool">Execution</p>

                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Execution - WWW - Who What When.pdf">
                                    <Image src={Execution1} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>WWW</h2>
                                        <p>Who What When</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Execution- Rockefeller Habits Checklist.pdf">
                                    <Image src={Execution2} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>Execution</h2>
                                        <p>Rockefeller Habits Checklist</p>
                                    </div>
                                </Link>
                            </div>                         

                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="section-header-tool">Cash</p>

                    </div>
                    <div className="mt-4">
                        <div className="row g-4">
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - CASh - Cash Acceleration Strategies.pdf">
                                    <Image src={Cash1} alt="case1" className="toolkit-img img-fluid" />

                                    <div className="overlay">
                                        <h2>CASh</h2>
                                        <p>Cash Acceleration Strategies</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-12 image-div">
                                <Link className="tool-img-link" target="_blank" href="../../../assets/images/PDF/Cash - POO -  The Power of One.pdf">
                                    <Image src={Cash1} alt="case2" className="toolkit-img img-fluid" />
                                    <div className="overlay">
                                        <h2>POO</h2>
                                        <p>The Power of One</p>
                                    </div>
                                </Link>
                            </div>                         

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default page;
