import React from "react";
import "./Skill.scss";
import skillImg from "../../../images/skillsvg.svg";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <section className="skill_section">
      <div className="container">
        <div className="about_header  text-center">
          {/* <h1>About <span>Me</span></h1> */}
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="skill_content section-header">
              <h1>
                My <span>Skills</span>
              </h1>
              <div className="skill_dis">
                <h6>
                  <b>Experience:</b>
                </h6>
                <p>
                  ‣ Worked on creating the frontend-end of the website using
                  React.js, Also Many ui framework
                </p>
                {/* <br/> */}
                <p>
                  ‣ Operated on developing the frontend end of the website using
                  Bootstrap, Javascript and backend APIs using Node.js
                </p>
                
              </div>
              <div className="skill-ProgressBar mt-5">
                <div className="single-prg">
                  <h5>React.js</h5>
                  <ProgressBar
                    completed={80}
                    bgColor="#463B41"
                    height="12px"
                    labelAlignment="center"
                    baseBgColor="#ddd"
                    labelColor="#ffffff"
                    labelSize="14px"
                    margin="5"
                    width="80%"
                    padding="45"
                    transitionDuration="6"
                  />
                </div>
                <div className="single-prg">
                  <h5>Node.js</h5>
                  <ProgressBar
                    completed={70}
                    bgColor="#463B41"
                    height="12px"
                    width="80%"
                    labelAlignment="center"
                    baseBgColor="#ddd"
                    labelColor="#ffffff"
                    labelSize="14px"
                    margin="5"
                    padding="45"
                    transitionDuration="6"
                  />
                </div>
                <div className="single-prg">
                  <h5>MongoDB</h5>
                  <ProgressBar
                    completed={50}
                    bgColor="#463B41"
                    width="80%"
                    height="12px"
                    labelAlignment="center"
                    baseBgColor="#ddd"
                    labelColor="#ffffff"
                    labelSize="14px"
                    margin="5"
                    padding="45"
                    transitionDuration="6"
                  />
                </div>
                <div className="single-prg">
                  <h5>WordPress</h5>
                  <ProgressBar
                    completed={85}
                    bgColor="#463B41"
                    height="12px"
                    width="80%"
                    labelAlignment="center"
                    baseBgColor="#ddd"
                    labelColor="#ffffff"
                    labelSize="14px"
                    margin="5"
                    padding="45"
                    transitionDuration="6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill_img">
              <img src={skillImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
