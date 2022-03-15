import React, { Component } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
