import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
const Slideshow = () => {
  return (
    <div className="slideshow ">
      <Slide arrows={false} indicators={true}>
        <div className="each-slide1">
          <section>
            <h2>
              We are <span>Seekers & Finders</span>
            </h2>
            <p>Explore using Seekers&Finders</p>
          </section>
        </div>

        <div className="each-slide2 white-text">
          <section>
            <h2 className="white-text">Directory</h2>
            <p>You can discover new outlets</p>
          </section>
        </div>
        <div className="each-slide3">
          <section>
            <h2>Convenient and Informative</h2>
            <p>Stay updated with trendy stores</p>
          </section>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
