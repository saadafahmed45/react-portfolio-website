import React from "react";
import "./HeaderMain.scss"
import AboutSection from "../Home/AboutSection/AboutSection";
import Contact from "../Home/Contact/Contact";
import Home from "../Home/Home/Home";
import Portfolio from "../Home/Portfolio/Portfolio";
import Services from "../Home/Services/Services";
import Footer from "../Home/Footer/Footer";
import Blog from "../Home/Blog/Blog";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const HomeMain = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="home_spnner">
          {" "}
          <HashLoader
            color={"#11E044"}
            loading={loading}
            size={55}
          />
        </div>
      ) : (
        <div>
          <Home></Home>
          <AboutSection></AboutSection>
          <Portfolio></Portfolio>
          <Blog></Blog>
          <Services></Services>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default HomeMain;
