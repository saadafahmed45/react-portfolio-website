import React from 'react';
import About from '../Home/About/About';
import Home from '../Home/Home/Home';
import Portfolio from '../Home/Portfolio/Portfolio';
import Services from '../Home/Services/Services';
import Skill from '../Home/Skill/Skill';
const HomeMain = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Services></Services>
            <Portfolio></Portfolio>
        </div>
    );
};

export default HomeMain;