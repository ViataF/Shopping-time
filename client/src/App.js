import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import UserInfoState from "./context/user_info/UserInfoState";
import "./App.css";

const App = () => {
  return (
    <UserInfoState>
      <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
          <Navbar />
          <About />
          <Contact />
        </Fragment>
      </Router>
    </UserInfoState>
  );
};

export default App;
