import React from "react";
import "./Header.scss";
import Typical from "react-typical";

import Navbar from "../../Shared/Navbar/Navbar";
const Header = () => {
  return (
    <>
      <div className="header_section">
        <Navbar></Navbar>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-content text-center">
                <h3>WELCOME TO MY WORLD</h3>
                <h1>Hi, I’m Mohammad H. </h1>
               <div className="type">
               <Typical
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Font-End &",
                    1000,
                    "Back-End Developer",
                    1000,
                    " Designer!",
                    1000,
                    " Photographer!",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
               </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.
                </p>
              </div>
              <div className="header-btn mt-5">
                <a href="http://imroz.rainbowit.net/dark-portfolio-landing#service"> Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
