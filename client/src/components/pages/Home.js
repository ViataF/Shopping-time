import React, { Fragment } from "react";
import Slideshow from "../layout/Slideshow";
import "./Home.css";
import OpenNow from "../layout/OpenNow";
import Purpose from "../layout/Purpose";
// import Categories from "../layout/Categories";
const Home = () => {
  return (
    <div className="home-section" id="home">
      <Fragment>
        <Slideshow />
        <Purpose />
        <OpenNow />
      </Fragment>
    </div>
  );
};

export default Home;
