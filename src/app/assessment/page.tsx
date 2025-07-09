import React from 'react'
import "./assessement.css";
import Image from "next/image";
import Herosection from "../../../src/app/assessment/images/Hero-section.png";
import infographic from "../../../src/app/assessment/images/Infographics.png";

const page = () => {
  return (
    <div>
      <div className="first_div_layout success">
        <div className="main_first_div_body">
          <div
            className="innerContainer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="heading" style={{ color: "white" }}>
              is your Business Ready to Scale? 
              Assess your readiness with 
              Scaling Up Assessment.
            </p>

          </div>
        </div>
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <p className='text' style={{fontWeight: "Bold" }}>
            Hey Founder,
          </p>
          <p className="text pt-3">
            Do you ever feel like something’s holding your business back but you can’t quite put your finger on it? You’re not alone! And that’s exactly what the Scaling Up Assessment helps you solve!
          </p> 
          <p className="text pt-3">
            The personalized Scaling Up diagnostic report gives you a clear picture of how ready your business is to scale. Built on the globally trusted Scaling Up framework by Verne Harnish, the assessment provides a clear, data-backed snapshot of where you stand today, how you compare to your peers, and what key areas deserve your focus next.
          </p>
          <p className="text pt-3">
            It blends practical insights from the Scaling Up/Rockefeller Habits 2.0 methodology alongside proven academic models of growth and organizational development. It’s shaped by the wisdom of numerous seasoned entrepreneurs, coaches, and business mentors, people who’ve been exactly where you are.
          </p>
          <p className="text pt-3">
            This assessment is meant to be completed by the Founder along with their leadership team.Whether you’re scaling up for the first time or looking to break through your next growth ceiling, this assessment is designed to help you uncover roadblocks, strategize, and align your leadership team for long-term success.
          </p>
          <p className="text pt-3">
            A brief exercise but the clarity you gain can be game-changing!
          </p>
        </div>      
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <div>
            <p className="subhead" style={{ color: "Black" }}>
              is your Business Ready to Scale?
            </p>
          </div>
          <div className="col-md-12 d-flex justify-content-center mt-3" style={{height : '50%'}}>            
            <Image
              src={infographic}
              alt="Infographics"
              className="img-fluid"
              style={{
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>      
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <p className="subhead" style={{ color: "Black" }}>
            Want to Know More?
          </p>
          <p className="text pt-2">
            Let’s talk. Book a call and we will get back to you! Together, let’s chart your next growth leap.
          </p>
          <div className="submit-btn-div">
              <button
                type="submit"
                className="btnstyle btn-submit"
              >
                Book a Discovery Call
              </button>
          </div>
        </div>      
      </div>
      <div className="second_div_layout">
        <div className="d-flex flex-column justify-content-between second_text_div">
          <div className="d-flex flex-column justify-content-between innerdiv">
            <form className="w-100">
                <p className="subhead" style={{ color: "white" }}>
                  Ready to Take the First Step Towards Smarter Scaling?
                </p>
                <p className="text pt-2" style={{fontWeight: "Bold" }}>
                  Complete your Scaling Up Assessment for just ₹25,000.
                </p>
                <p className="text pt-2">
                  Proceed to make your payment here and share your team’s details to activate your Scaling Up Assessment.
                </p>
                <div className='row row-gap mt-4'>
                  <div className="col-md-4 input_div">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="First Name"
                      />
                      <label htmlFor="phone">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-4 input_div">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <label htmlFor="phone">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-4 input_div">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                </div>
                <div className='row row-gap mt-md-4'>
                  <div className="col-md-6 input_div">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Designation"
                      />
                      <label htmlFor="phone">Designation</label>
                    </div>
                  </div>
                  <div className="col-md-6 input_div">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="email"
                      />
                      <label htmlFor="phone">Email</label>
                    </div>
                  </div>
                </div>
                <div className="submit-btn-div paymentbtn">
                  <button
                    type="submit"
                    className="btnstyle btn-submit"
                  >
                    Proceed with Payment
                  </button>
                </div>
            </form>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default page