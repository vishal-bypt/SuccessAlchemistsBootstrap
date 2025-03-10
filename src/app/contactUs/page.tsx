"use client";
import "./contactus.css";
import Image from "next/image";


import curveShape2 from "../../../public/assets/images/Curve-shape2.svg"

const ContactUs = () => {
    return (
        <div className="main_body_div">
            <div className="first_div_layout">
                <div className="main_first_div_body">
                    <div className="innerContainer">
                        <p className="heading" style={{ color: "white", textAlign: 'left' }}>
                            Contact us
                        </p>
                        <p className="subText" style={{ color: "white", textAlign: 'left' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the
                        </p>
                    </div>
                </div>
            </div>

            <div className="second_div_layout">
                <Image src={curveShape2} alt="curve1" className="curve-contact img-fluid" />
                <div className="third_div_layout contact-div shadow-lg">
                    {/* <Image src={curve1} alt="curve1" className="image3 img-fluid" /> */}


                    <form className="w-100">
                        <p className="heading" style={{ color: "white" }}>
                            Schedule a conversation
                        </p>
                        <div className="row row-gap mt-4">
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Phone number</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <textarea className="form-control contact-textrea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label htmlFor="floatingTextarea">Message</label>
                                </div>
                            </div>
                        </div>
                        <div className="submit-btn-div">
                            <button type="submit" className="btn btn-submit">SEND NOW</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default ContactUs;
