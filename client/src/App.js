import React, { Fragment } from "react";
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
import "./App.css";
import "antd/dist/antd.css";
import UserForm from "./components/Userinfo/UserForm";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <UserInfoState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/userform" component={UserForm} />
                </Switch>
                <About />
                <Contact />
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </UserInfoState>
    </AuthState>
  );
};

export default App;
