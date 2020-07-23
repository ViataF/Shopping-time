import React, { Fragment, useContext, useEffect } from "react";
import Slideshow from "../layout/Slideshow";
import Users from "../Userinfo/UserInfo";
import UserForm from "../Userinfo/UserForm";
import CategorieFilter from "../Userinfo/CategorieFilter";
import AuthContext from "../../context/auth/authContext";
import "./Home.css";
const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-section" id="home">
      <Fragment>
        <Slideshow />
        <Users />
        <UserForm />
        <CategorieFilter />
      </Fragment>
    </div>
  );
};

export default Home;
