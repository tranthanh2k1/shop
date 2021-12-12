import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../constant";

const PrivateRouter = (props) => {
  return <Route {...props} />
}


export default PrivateRouter;
