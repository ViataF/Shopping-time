import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide1">
          <section>
            <h2>Shopping Time</h2>
            <p>Slide 1</p>
          </section>
        </div>

        <div className="each-slide2">
          <section>
            <h2>Shopping Time</h2>
            <p>Slide 1</p>
          </section>
        </div>
        <div className="each-slide3">
          <section>
            <h2>Shopping Time</h2>
            <p>Slide 1</p>
          </section>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
