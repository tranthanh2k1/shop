import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../constant";

const PrivateRouter = ({ children }) => {
  return <Route render={() => {
    return isAuthenticated() && isAuthenticated().user.role === 1 ?
      children :
      <Redirect to={{ pathname: '/auth/login' }} />
  }} />
}


export default PrivateRouter;
