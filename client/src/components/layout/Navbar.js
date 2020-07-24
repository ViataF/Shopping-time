import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-scroll";
import AuthContext from "../../context/auth/authContext";
import UserInfoContext from "../../context/user_info/userInfoContext";
import { Link } from "react-router-dom";

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const userInfoContext = useContext(UserInfoContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearUserInfo } = userInfoContext;

  const onLogout = () => {
    logout();
    clearUserInfo();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-lt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <h1>Hello world</h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navigation;
