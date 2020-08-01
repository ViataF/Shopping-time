import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alert";
import Contact from "./components/pages/Contact";
import PrivateRoute from "./components/routing/PrivateRoute";

import UserInfoState from "./context/user_info/UserInfoState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuhToken";
import User from "./components/pages/Users";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Shops from "./components/pages/Shops";
import Footer from "./components/layout/Footer";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <AuthState>
      <UserInfoState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/shops" component={Shops} />
                <PrivateRoute exact path="/users" component={User} />
              </Switch>

              <Footer />
            </Fragment>
          </Router>
        </AlertState>
      </UserInfoState>
    </AuthState>
  );
};

export default App;
