import React from "react";
import SliderLeft from "./SliderLeft";
import SliderRight from "./SliderRight";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slideBlock">
      <section id="sliderBlock">
        <article>
          <SliderLeft />
          <SliderRight />
        </article>
      </section>
    </div>
  );
};

export default Slider;
