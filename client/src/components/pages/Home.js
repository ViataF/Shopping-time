import React, { Fragment, useContext, useEffect } from "react";
import Slideshow from "../layout/Slideshow";

import UserForm from "../Userinfo/UserForm";
import CategorieFilter from "../Userinfo/CategorieFilter";

import "./Home.css";
import OpenNow from "../layout/OpenNow";
import Purpose from "../layout/Purpose";
import Categories from "../layout/Categories";
const Home = () => {
  return (
    <div className="home-section" id="home">
      <Fragment>
        <Slideshow />
        <Purpose />
        <OpenNow />
        <Categories />
      </Fragment>
    </div>
  );
};

export default Home;
