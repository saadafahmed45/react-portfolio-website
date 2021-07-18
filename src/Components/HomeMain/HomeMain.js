import React from 'react';
import AboutSection from '../Home/AboutSection/AboutSection';
import Contact from '../Home/Contact/Contact';
import Home from '../Home/Home/Home';
import Portfolio from '../Home/Portfolio/Portfolio';
import Services from '../Home/Services/Services';
import Footer from '../Home/Footer/Footer';
const HomeMain = () => {
    return (
        <>    
            <Home></Home>
            <AboutSection></AboutSection>
            <Portfolio></Portfolio>
            <Services></Services>
            <Contact></Contact>
      <Footer></Footer>
        </>
    );
};

export default HomeMain;