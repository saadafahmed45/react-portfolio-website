import React, { useState } from "react";
import "./Portfolio.scss";
import ModalImage from "react-modal-image";

import service2 from "../../../images/error.svg";
import service3 from "../../../images/Screenshot 2021-07-07 at 04-13-43 Portfolio Landing React Multipurpose Template.png";
import { Lightbox } from "react-modal-image";

const Portfolio = () => {
    const [open,setOpen]= useState(false);

    const closeLightbox = () => {
        setOpen(true)
      };
  return (
    <section className="portfolio_section">
      <div className="container">
        <div className="portfolio_header section-header">
          <h1>
            My <span>Portfolio</span>
          </h1>
          {/* <ModalImage small={service2} large={service3} alt="" /> */}

        </div>
        <div className="row">
          <div className="col-md-4">
           <div className="portfolio_box">
               <div className="portfolio_img text-center">
          <ModalImage small={service2} large={service3} alt="" />  
          <h4>Click Bazz Photographer</h4>  
               </div>
               <div className="portfolio_btn">
              <a  className=" " href="#">Live </a>
          
              <a  className="" href="#">Code</a>
          </div>
           </div>
            
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
