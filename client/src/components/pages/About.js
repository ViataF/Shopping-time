import React from "react";
import Purpose from "../layout/Purpose";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <section>
        <h2 className="aboutUs">
          We are <span className="name"> Seekers & Finders</span>
        </h2>
        <p className="about">Connecting businessses and customers</p>
        <aside>
          Seekers & Finders acts as a middle man for businesses and their
          customers. We create a easy way for businesses to be promoted and
          found while customers can easily find and seek businesses.
        </aside>
        <Purpose />
      </section>
    </div>
  );
};

export default About;
