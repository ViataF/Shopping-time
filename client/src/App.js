import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import "antd/dist/antd.css";
import UserInfoState from "./context/user_info/UserInfoState";
import "./App.css";
import UserForm from "./components/Userinfo/UserForm";

const App = () => {
  return (
    <UserInfoState>
      <Router>
        {/* <Navbar /> */}
        <Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/userform" component={UserForm} />
            </Switch>
            <About />
            <Contact />
          </div>
        </Fragment>
      </Router>
    </UserInfoState>
  );
};

export default App;
