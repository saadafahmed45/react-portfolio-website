import React from "react";
import "./Profile.scss";
import profileImg from "../../../images/saad1.png";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const Profile = () => {
  return (
    <section>
      <div className="container">
     
        <div className="profile_header  ">
          {/* <h2> <span>Profile</span></h2> */}
        </div>
        <div className="row">
          <div className="col-md-6">
          <Pulse
         duration={1000}>
            <div className="profile-img">
              <img src={profileImg} alt="" />
            </div>
            </Pulse>
          </div>
          <div className="col-md-6 ">
          <Fade bottom>

            <div className=" section-header profile_content_main text-left">
            <h2>
                  {" "}
                  <span>Profile_</span>
                </h2>
              <div className="profile_content">
                

                <h3>I'm Mohammad Haolader</h3>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more & more
                  interactive with web animations.
                </p>
                <li>Full Name : Mohammad Haolder</li>
                <li>Age : 22 Years</li>
                <li>Nationality : Bangladeshi</li>
                <li>Languages : English/Bangali</li>
                <li>Address : Dhaka-1263, Bangladesh</li>
              </div>
              <div className="cv_btn mt-4">
                <a className=" btn btn-lg btn-outline-success" href="https://drive.google.com/file/d/1cEukF4u6DwOjeQabzfS_ylVgbReCmeEh/view?usp=sharing">
                  {" "}
                  Download CV
                </a>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
