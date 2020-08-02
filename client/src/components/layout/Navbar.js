import React, { useContext, Fragment } from "react";

import AuthContext from "../../context/auth/authContext";
import UserInfoContext from "../../context/user_info/userInfoContext";
import logo from "./images/logo.png";
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
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <a href="/register">Register</a>
      </li>
      <li className="divider"></li>
      <li>
        <a href="/login">Login</a>
      </li>
    </Fragment>
  );

  const Personal = (
    <Fragment>
      <li>
        <a href="/">Home </a>
      </li>

      <li>
        <a href="/shops">Shops </a>
      </li>

      <li>
        <a href="/about">About </a>
      </li>

      <li>
        <a href="/contact">Contact </a>
      </li>
    </Fragment>
  );
  const business = (
    <Fragment>
      <li>
        <a className="dropdown-trigger" href="#!" data-target="dropdown1">
          Business<i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <img src={logo} alt="logo" />
            Seekers&Finders
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons black-text">menu</i>
          </a>
          <ul className="hide-on-med-and-down">
            {isAuthenticated ? authLinks : business}
            {Personal}
          </ul>
        </div>
        <ul id="dropdown1" className="dropdown-content">
          {isAuthenticated ? null : guestLinks}
        </ul>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {Personal}
        {isAuthenticated ? authLinks : business}
      </ul>
    </div>
  );
};

export default Navigation;
