import React from "react";
import "./About.scss";
import aboutimg from "../../../images/about.svg";
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <section className="about_section">
      <div className="container">
        <div className="about_header text-center">
          {/* <h1>About <span>Me</span></h1> */}
        </div>
        <div className="row">
          <div className="col-md-6">
          <Fade left>
            <div className="about_img">
              <img src={aboutimg} alt="" />
            </div>
            </Fade>
          </div>
          <div className="col-md-6">
          <Fade bottom>
            <div className="about_content">
              <h2>
                 <span>About</span>
              </h2>
              {/* <h5>Summary:</h5> */}
              <p>
               <b> I'm  Mohammad Haolader.</b> <br/> Currently studying Computer Science at
                Stamford University Bangladesh. I have been working as a
                freelance web developer and writer for the last two years.The
                world is changing rapidly, and I don’t have enough professional
                experience to be certain about such things. However, I know that
                I can provide a fresh take and an extraordinary approach to
                every project.
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
