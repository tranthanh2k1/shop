import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { path } from "../Constants";
import AuthLayout from "../Layouts/AuthLayout";
import SiteLayout from "../Layouts/SiteLayout";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AdminLayout from "../Layouts/AdminLayout";

const RootRoute = () => {
  return (
    <Router>
      <Switch>
        <PrivateRouter path={path.ADMIN} component={AdminLayout}/>
        <PublicRouter path={path.AUTH} component={AuthLayout} />
        <PublicRouter path={path.HOME} component={SiteLayout} />
      </Switch>
    </Router>
  );
};

export default RootRoute;
