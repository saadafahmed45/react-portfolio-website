import React from "react";
import "./Services.scss";
import service1 from "../../../images/Code_review.svg";
import service2 from "../../../images/error.svg";
import service3 from "../../../images/static_web.svg";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Services = () => {
  const myService = [
    {
      service: "Fresh Code",
      ServiceImg: service1,
      serviceContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fugiat minima iusto sunt officia dolorem, blanditiis qui similique perspiciatis veniam!",
    },
    {
      service: "Bug Fix",
      ServiceImg: service2,
      serviceContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fugiat minima iusto sunt officia dolorem, blanditiis qui similique perspiciatis veniam!",
    },
    {
      service: "Static Web",
      ServiceImg: service3,
      serviceContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fugiat minima iusto sunt officia dolorem, blanditiis qui similique perspiciatis veniam!",
    },
  ];

  return (
    <section className="services_section" id="services">
      <div className="container">
        <Fade bottom>
          <div className="service_header section-header">
            <h1>
              {" "}
              My <span>Services</span>{" "}
            </h1>
            {/* <h2>service {myService.length}</h2> */}
          </div>
        </Fade>
        <div className="row">
          {myService.map((service) => (
            <div className="col-sm-6 col-md-4 service_link">
              <Link className="" to="/service">
        <Fade bottom
        duration='1000'
        >

                <div className="service_box">
                  <div className="service_img">
                    <img src={service.ServiceImg} alt="" />
                  </div>
                  <div className="service-content">
                    <h3>{service.service}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad numquam tempore .
                    </p>
                  </div>
                </div>
                </Fade>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
