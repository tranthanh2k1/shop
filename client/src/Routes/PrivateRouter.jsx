import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = (props) => {
  return <Route {...props} />;
};

export default PrivateRouter;
