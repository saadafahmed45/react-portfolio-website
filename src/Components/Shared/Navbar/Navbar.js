import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../../images/lg.png"
// import Home from "../../Home/Home/Home";
// import { Link, } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import {  Link} from "react-router-dom";

const Navbar = () => {
    const [navbar,setNavbar]= useState(false)

  const changeBackground =()=>{
    console.log(window.scrollY);
    if(window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);

    }
  }
  window.addEventListener('scroll',changeBackground);

  return (
    <div>
      <nav class={navbar ? "navbar scroll navbar-expand-lg navbar-dark bg-transparent  fixed-top" : "navbar  navbar-expand-lg navbar-dark bg-transparent  fixed-top"}>
        <Link class="navbar-brand ml-5" to="/">
          {/* <i>M.H</i> */}
          <img src={logo} alt="" />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-5 ">
            <li class="nav-item nav_active">
              <Link class="nav-link " smooth to="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" smooth to="#about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " smooth to="#portfolio">
                Portfolio
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" smooth  to="/dashboard">
                Dashboard
              </Link>
            </li> */}

            <li class="nav-item">
              <Link class="nav-link" smooth to="#services">
                Service
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" smooth to="#contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="social_link">
            <a href="https://www.facebook.com/saadafhmed.officials">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-h-47aa54216/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/saadafahmed45">
              <FaGithub />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
