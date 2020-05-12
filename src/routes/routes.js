import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />

        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
