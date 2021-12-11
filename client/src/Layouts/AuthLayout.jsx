import React from "react";
import { path } from "../Constants";
import { Route, Switch } from "react-router";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";

const AuthLayout = () => {
  return (
    <Switch>
      <Route exact path={path.REGISTER} component={SignUp} />
      <Route exact path={path.LOGIN} component={SignIn} />
    </Switch>
  );
};

export default AuthLayout;
