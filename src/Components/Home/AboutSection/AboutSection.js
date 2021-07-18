import React from "react";
import "./AboutSection.scss";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Skill from "../Skill/Skill";
import Fade from "react-reveal/Fade";

const AboutSection = () => {
  return (
    <section className="contact-section" id="about">
      <div className="">
        <Fade bottom>
          <div className="cntact-header section-header">
            <h1>
              My About<span> Details</span>
            </h1>
          </div>
        </Fade>
        <div class="row">
          <div className="col-md">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-about-tab"
                  data-toggle="tab"
                  href="#nav-about"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="true"
                >
                  About
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-skills-tab"
                  data-toggle="tab"
                  href="#nav-skills"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Skills
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Profile
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-about"
                role="tabpanel"
                aria-labelledby="nav-about-tab"
              >
                <About />
              </div>
              <div
                class="tab-pane fade"
                id="nav-skills"
                role="tabpanel"
                aria-labelledby="nav-skills-tab"
              >
                <Skill />
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <Profile></Profile>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
