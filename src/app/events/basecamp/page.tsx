import Image from "next/image";
import blogimg1 from "../../../../public/assets/images/ajay-sir-photo.svg";
import basecamp1 from "../../../../public/assets/images/basecamp1.jpeg";
import basecamp2 from "../../../../public/assets/images/basecamp2.jpeg";
import basecamp4 from "../../../../public/assets/images/basecamp4.jpeg";
import curve1 from "../../../../src/app/about/images/curve1.png";
import Double_arrow from "../../home/images/Double_arrow.png";
import basecamplogo2 from "../basecamp/Images/Basecamp_White.png";
import bluecurve from "../basecamp/Images/blue-curve.svg";
import "./basecamp.css";

const page = () => {
  return (
    <div className="main_body_div">
      {/* <div className="first_div_layout basecamp">
                <div className="main_first_div_body">
                    <div
                        className="innerContainer"
                        style={{ justifyContent: "center", alignItems: "center" }}
                    >
                        <p className="heading" style={{ color: "white" }}>
                            Basecamp workshop
                        </p>
                        <p className="subText" style={{ color: "white" }}>
                            Are you looking for
                            Accelerated growth and Augmented
                            value ?
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
            Basecamp workshop
          </p>
          <p className="subText" style={{ color: "white" }}>
            Are you looking for Accelerated growth and Augmented value ?
          </p>
        </div>
      </div>

      <div className="second_div_layout">
        <div className="webinar-header">
          <h1 className="webinar_heading">
            Basecamp <span className="badge blue-badge">Paid</span>
          </h1>
          {/* <button
                        className="border-0 bg-transparent text-decoration-underline"
                        style={{ color: "rgba(251, 168, 25, 1)" }}
                    >
                        VIEW MORE
                    </button> */}
        </div>
        <div className="webinar-content">
          <p className="mb-2">
            At Success Alchemists, we are dedicated to transforming businesses
            through the proven Scaling Up framework developed by Verne Harnish.
            With a diverse client base spanning various industries, we empower
            organizations to achieve sustainable growth and operational
            excellence.
          </p>
          <p>
            This webinar is an excellent platform to acquire actionable
            knowledge, enhance your growth strategies, and connect with
            like-minded individuals dedicated to success. Don’t miss this
            enriching experience to propel your business forward!
          </p>
        </div>
        <div className="third_div_layout shadow-lg mt-3">
          <Image src={curve1} alt="curve1" className="image3 img-fluid" />
          <div className="row align-items-center">
            <div className="col-md-4">
                <a href="https://www.success-alchemists.com/attend-the-workshop/" style={{textDecoration:'none' }}>
              <div className="attend-time-div">
                <div>
                <p className="attend-text">Attend the workshop</p>
                <p className="location-text">On 20th February 2025 at J W mariott, Pune</p>
                </div>
                <Image className="img-fluid" src={Double_arrow} alt="right" />
              </div>
              </a>
            </div>
            <div className="offset-md-1 col-md-6">
              <p
                className="subText webinar-sub-text mt-0"
                style={{ color: "white", width: "100%" }}
              >
                Learn from India's first certified Scaling Up coach Ajay
                Hiraskar who has led the implementation of the Scaling Up
                performance platform across many industry verticals. This
                platform has already guided more than 80,000 companies world
                wide to succeed and grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="second_div_layout">
        <div className="webinar-header">
          <h1 className="webinar_heading">Our previous workshop</h1>
          {/* <button
                        className="border-0 bg-transparent text-decoration-underline"
                        style={{ color: "rgba(251, 168, 25, 1)" }}
                    >
                        VIEW MORE
                    </button> */}
        </div>

        <div className="webinar-main-box">
          <div className="row">
            <div className="col-md-4">
              <div className="webinar-box">
                <div className="col-md-12">
                  <Image
                    className="img-fluid rounded webinar-image w-100"
                    src={basecamp1}
                    alt="img2"
                  />
                  {/*<div className="webinar-box-content">
                                        <div className="first-box-outer">
                                            <div className="second-box-content">
                                                <h3>Social Media Marketing</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                            <div className="first-box-content">
                                                <div>

                                                    <p>
                                                        <svg className="me-2" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'sub' }}>
                                                            <path d="M4 2.5V4.9M12 2.5V4.9" stroke="#FBA819" stroke-width="2" stroke-linecap="round" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.10002C0 6.59122 0 5.83762 0.4688 5.36882C0.9376 4.90002 1.6912 4.90002 3.2 4.90002H12.8C14.3088 4.90002 15.0624 4.90002 15.5312 5.36882C16 5.83762 16 6.59122 16 8.10002C16 8.47682 16 8.66562 15.8832 8.78322C15.7656 8.90002 15.576 8.90002 15.2 8.90002H0.8C0.4232 8.90002 0.2344 8.90002 0.1168 8.78322C0 8.66562 0 8.47602 0 8.10002ZM0 15.3C0 16.8088 0 17.5624 0.4688 18.0312C0.9376 18.5 1.6912 18.5 3.2 18.5H12.8C14.3088 18.5 15.0624 18.5 15.5312 18.0312C16 17.5624 16 16.8088 16 15.3V11.3C16 10.9232 16 10.7344 15.8832 10.6168C15.7656 10.5 15.576 10.5 15.2 10.5H0.8C0.4232 10.5 0.2344 10.5 0.1168 10.6168C0 10.7344 0 10.924 0 11.3V15.3ZM4 12.1H5.6V13.7H4V12.1ZM5.6 15.3H4V16.9H5.6V15.3ZM7.19995 12.1H8.79995V13.7H7.19995V12.1ZM8.79995 15.3H7.19995V16.9H8.79995V15.3ZM10.3999 12.1H11.9999V13.7H10.3999V12.1ZM11.9999 15.3H10.3999V16.9H11.9999V15.3Z" fill="#FBA819" />
                                                        </svg>Sat 15 Feb 2025  8:30 PM</p>

                                                    <p>
                                                        <svg className="me-2" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 0.590942C5.14416 0.593132 3.36495 1.33133 2.05267 2.64361C0.740394 3.95589 0.00219378 5.7351 4.39357e-06 7.59094C-0.00170191 9.10745 0.493636 10.5827 1.41019 11.7909C1.41019 11.7909 1.60109 12.0423 1.63228 12.0786L7 18.4091L12.3703 12.0754C12.3983 12.0417 12.5898 11.7909 12.5898 11.7909L12.5905 11.789C13.5064 10.5813 14.0015 9.10672 14 7.59094C13.9978 5.7351 13.2596 3.95589 11.9473 2.64361C10.635 1.33133 8.85584 0.593132 7 0.590942ZM7 10.1364C6.49656 10.1364 6.00442 9.9871 5.58582 9.70741C5.16723 9.42771 4.84097 9.03016 4.64831 8.56504C4.45565 8.09992 4.40524 7.58812 4.50346 7.09435C4.60167 6.60058 4.84411 6.14702 5.20009 5.79103C5.55608 5.43504 6.00964 5.19261 6.50341 5.0944C6.99718 4.99618 7.50898 5.04659 7.9741 5.23925C8.43922 5.43191 8.83677 5.75816 9.11647 6.17676C9.39617 6.59536 9.54545 7.0875 9.54545 7.59094C9.54461 8.26578 9.27616 8.91273 8.79898 9.38992C8.3218 9.8671 7.67484 10.1356 7 10.1364Z" fill="#FBA819" />
                                                        </svg>44029 Bridget Creek, Theresefort, MN</p>

                                                </div>

                                            </div>
                                        </div>

                </div>*/}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="webinar-box">
                <div className="col-md-12">
                  <Image
                    className="img-fluid rounded webinar-image w-100"
                    src={basecamp2}
                    alt="img2"
                  />
                  {/*<div className="webinar-box-content">
                                        <div className="first-box-outer">
                                            <div className="second-box-content">
                                                <h3>Social Media Marketing</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                            <div className="first-box-content">
                                                <div>

                                                    <p>
                                                        <svg className="me-2" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'sub' }}>
                                                            <path d="M4 2.5V4.9M12 2.5V4.9" stroke="#FBA819" stroke-width="2" stroke-linecap="round" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.10002C0 6.59122 0 5.83762 0.4688 5.36882C0.9376 4.90002 1.6912 4.90002 3.2 4.90002H12.8C14.3088 4.90002 15.0624 4.90002 15.5312 5.36882C16 5.83762 16 6.59122 16 8.10002C16 8.47682 16 8.66562 15.8832 8.78322C15.7656 8.90002 15.576 8.90002 15.2 8.90002H0.8C0.4232 8.90002 0.2344 8.90002 0.1168 8.78322C0 8.66562 0 8.47602 0 8.10002ZM0 15.3C0 16.8088 0 17.5624 0.4688 18.0312C0.9376 18.5 1.6912 18.5 3.2 18.5H12.8C14.3088 18.5 15.0624 18.5 15.5312 18.0312C16 17.5624 16 16.8088 16 15.3V11.3C16 10.9232 16 10.7344 15.8832 10.6168C15.7656 10.5 15.576 10.5 15.2 10.5H0.8C0.4232 10.5 0.2344 10.5 0.1168 10.6168C0 10.7344 0 10.924 0 11.3V15.3ZM4 12.1H5.6V13.7H4V12.1ZM5.6 15.3H4V16.9H5.6V15.3ZM7.19995 12.1H8.79995V13.7H7.19995V12.1ZM8.79995 15.3H7.19995V16.9H8.79995V15.3ZM10.3999 12.1H11.9999V13.7H10.3999V12.1ZM11.9999 15.3H10.3999V16.9H11.9999V15.3Z" fill="#FBA819" />
                                                        </svg>Sat 15 Feb 2025  8:30 PM</p>

                                                    <p>
                                                        <svg className="me-2" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 0.590942C5.14416 0.593132 3.36495 1.33133 2.05267 2.64361C0.740394 3.95589 0.00219378 5.7351 4.39357e-06 7.59094C-0.00170191 9.10745 0.493636 10.5827 1.41019 11.7909C1.41019 11.7909 1.60109 12.0423 1.63228 12.0786L7 18.4091L12.3703 12.0754C12.3983 12.0417 12.5898 11.7909 12.5898 11.7909L12.5905 11.789C13.5064 10.5813 14.0015 9.10672 14 7.59094C13.9978 5.7351 13.2596 3.95589 11.9473 2.64361C10.635 1.33133 8.85584 0.593132 7 0.590942ZM7 10.1364C6.49656 10.1364 6.00442 9.9871 5.58582 9.70741C5.16723 9.42771 4.84097 9.03016 4.64831 8.56504C4.45565 8.09992 4.40524 7.58812 4.50346 7.09435C4.60167 6.60058 4.84411 6.14702 5.20009 5.79103C5.55608 5.43504 6.00964 5.19261 6.50341 5.0944C6.99718 4.99618 7.50898 5.04659 7.9741 5.23925C8.43922 5.43191 8.83677 5.75816 9.11647 6.17676C9.39617 6.59536 9.54545 7.0875 9.54545 7.59094C9.54461 8.26578 9.27616 8.91273 8.79898 9.38992C8.3218 9.8671 7.67484 10.1356 7 10.1364Z" fill="#FBA819" />
                                                        </svg>44029 Bridget Creek, Theresefort, MN</p>

                                                </div>

                                            </div>
                                        </div>

            </div>*/}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="webinar-box">
                <div className="col-md-12">
                  <Image
                    className="img-fluid rounded webinar-image w-100"
                    src={basecamp4}
                    alt="img2"
                  />
                  {/* <div className="webinar-box-content">
                                        <div className="first-box-outer">
                                            <div className="second-box-content">
                                                <h3>Social Media Marketing</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                            <div className="first-box-content">
                                                <div>

                                                    <p>
                                                        <svg className="me-2" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'sub' }}>
                                                            <path d="M4 2.5V4.9M12 2.5V4.9" stroke="#FBA819" stroke-width="2" stroke-linecap="round" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.10002C0 6.59122 0 5.83762 0.4688 5.36882C0.9376 4.90002 1.6912 4.90002 3.2 4.90002H12.8C14.3088 4.90002 15.0624 4.90002 15.5312 5.36882C16 5.83762 16 6.59122 16 8.10002C16 8.47682 16 8.66562 15.8832 8.78322C15.7656 8.90002 15.576 8.90002 15.2 8.90002H0.8C0.4232 8.90002 0.2344 8.90002 0.1168 8.78322C0 8.66562 0 8.47602 0 8.10002ZM0 15.3C0 16.8088 0 17.5624 0.4688 18.0312C0.9376 18.5 1.6912 18.5 3.2 18.5H12.8C14.3088 18.5 15.0624 18.5 15.5312 18.0312C16 17.5624 16 16.8088 16 15.3V11.3C16 10.9232 16 10.7344 15.8832 10.6168C15.7656 10.5 15.576 10.5 15.2 10.5H0.8C0.4232 10.5 0.2344 10.5 0.1168 10.6168C0 10.7344 0 10.924 0 11.3V15.3ZM4 12.1H5.6V13.7H4V12.1ZM5.6 15.3H4V16.9H5.6V15.3ZM7.19995 12.1H8.79995V13.7H7.19995V12.1ZM8.79995 15.3H7.19995V16.9H8.79995V15.3ZM10.3999 12.1H11.9999V13.7H10.3999V12.1ZM11.9999 15.3H10.3999V16.9H11.9999V15.3Z" fill="#FBA819" />
                                                        </svg>Sat 15 Feb 2025  8:30 PM</p>

                                                    <p>
                                                        <svg className="me-2" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 0.590942C5.14416 0.593132 3.36495 1.33133 2.05267 2.64361C0.740394 3.95589 0.00219378 5.7351 4.39357e-06 7.59094C-0.00170191 9.10745 0.493636 10.5827 1.41019 11.7909C1.41019 11.7909 1.60109 12.0423 1.63228 12.0786L7 18.4091L12.3703 12.0754C12.3983 12.0417 12.5898 11.7909 12.5898 11.7909L12.5905 11.789C13.5064 10.5813 14.0015 9.10672 14 7.59094C13.9978 5.7351 13.2596 3.95589 11.9473 2.64361C10.635 1.33133 8.85584 0.593132 7 0.590942ZM7 10.1364C6.49656 10.1364 6.00442 9.9871 5.58582 9.70741C5.16723 9.42771 4.84097 9.03016 4.64831 8.56504C4.45565 8.09992 4.40524 7.58812 4.50346 7.09435C4.60167 6.60058 4.84411 6.14702 5.20009 5.79103C5.55608 5.43504 6.00964 5.19261 6.50341 5.0944C6.99718 4.99618 7.50898 5.04659 7.9741 5.23925C8.43922 5.43191 8.83677 5.75816 9.11647 6.17676C9.39617 6.59536 9.54545 7.0875 9.54545 7.59094C9.54461 8.26578 9.27616 8.91273 8.79898 9.38992C8.3218 9.8671 7.67484 10.1356 7 10.1364Z" fill="#FBA819" />
                                                        </svg>44029 Bridget Creek, Theresefort, MN</p>

                                                </div>

                                            </div>
                                        </div>

                                         </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second_div_layout">
        <div className="webinar-header">
          <h1 className="webinar_heading">
            Who are the speakers at the workshop?
          </h1>
        </div>

        <div className="webinar-main-box">
          <div className="row">
            <div className="col-md-4">
              <Image
                className="img-fluid speaker-image"
                src={blogimg1}
                alt="img2"
              />
            </div>
            <div className="col-md-8">
              <div className="second-box-content">
                <h3>Ajay Hiraskar</h3>
                <p className="mt-2">
                  Join our exclusive one-day workshop with Ajay Hiraskar,
                  India’s first certified Scaling Up coach, and unlock the keys
                  to accelerating your business growth. Learn proven strategies
                  to double your cash flow, triple your profitability, and
                  increase your company’s valuation tenfold. This workshop
                  provides rapid growth strategies, actionable tools, expert
                  mentorship, and access to a network of industry champions.
                  Tailored for founders, CEOs, and top leadership, it empowers
                  you to scale your vision, drive innovation, and achieve
                  extraordinary success. Explore essential growth tools across
                  the four pillars of scaling up: People, Strategy, Execution,
                  and Cash. Transform your organization with our Scaling Up
                  workshop!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
