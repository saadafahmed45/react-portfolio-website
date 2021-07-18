import React from "react";
import "./Header.scss";
import Typical from "react-typical";
import Jump from 'react-reveal/Jump';
import FbChat from "../../FbChat/FbChat";


const Header = () => {
  return (
    <>
      <div className="header_section">
    
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
              <Jump
              duration={3000}>
              <div className="header-btn ">
                <a href="https://drive.google.com/file/d/1cEukF4u6DwOjeQabzfS_ylVgbReCmeEh/view?usp=sharing"> Download CV</a>
                <FbChat></FbChat>
              </div>
              </Jump>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
