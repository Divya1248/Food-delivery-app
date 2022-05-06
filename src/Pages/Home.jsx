import React from "react";
import About from "./AboutUs/About";
import First from "./First/First";
import Footer from "./Footer/footer";
import Slider from "./Slider/Slider";
import "./Nav.css"

const Home = () => {
  return (
    <div>
     <First/>
      <About />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
