import React from "react";
import Header from "../Header/Header";
// import About from "../About/About";
import Navbar from "../../Shared/Navbar/Navbar";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
      {/* <Navbar></Navbar> */}
      <Header></Header>
      {/* <About></About> */}
    </div>
  );
};

export default Home;
