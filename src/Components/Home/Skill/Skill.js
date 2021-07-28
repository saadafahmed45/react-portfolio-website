import React from "react";
import "./Skill.scss";
import skillImg from "../../../images/skillsvg.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Skill = () => {
  
  return (
    <section className="skill_section">
      <div className="container">
        <div className="about_header  text-center">
   
        </div>
        <div className="row">
          <div className="col-md-6">
          <Fade bottom>
            <div className="skill_content section-header">
              <h2>
                 <span>Skills</span>
              </h2>
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
                  <h5>React.js <DiReact/></h5>
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
                    transitionDuration="2s"
                    transitionTimingFunction="ease-in-out	"
                  />
                  
                </div>
                <div className="single-prg">
                  <h5>Node.js <DiNodejsSmall/></h5>
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
                  <h5>MongoDB <DiMongodb/> </h5>
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
                  <h5>WordPress <DiWordpress/></h5>
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
            </Fade>
          </div>
          <div className="col-md-6">
          <Fade right>

            <div className="skill_img">
              <img src={skillImg} alt="" />
           </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
