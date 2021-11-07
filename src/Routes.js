import React from "react";
import { BrowserRouter as Router,Routes as Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Home from "./Pages/Home/Home";
const Routes = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
