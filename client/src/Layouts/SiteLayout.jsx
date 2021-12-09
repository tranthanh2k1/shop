import React from "react";
import { Switch } from "react-router-dom";
import PublicRouter from "../Routes/PublicRouter";
import { path } from "../Constants";
import HomePage from "../Pages/Public/HomePage";
import Header from "../Pages/Public/Commoms/Header";

import Footer from "../Pages/Public/Commoms/Footer";
import MakeAppointment from "../Pages/Public/MakeAppointmentPage";
import ContactPage from "../Pages/Public/ContactPage";
import ServicesList from "../Pages/Public/ServicesList";
import ServiceDetail from "../Pages/Public/ServiceDetail";
import Booked from "../Pages/Public/Booked";

const SiteLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.MAKEAPPOINTMENT} component={MakeAppointment} />
        <PublicRouter path={path.CONTACT} component={ContactPage} />
        <PublicRouter path={path.SERVICES_LIST} component={ServicesList} />
        <PublicRouter path={path.SERVICES_DETAIL} component={ServiceDetail} />
        <PublicRouter path={path.USER_BOOKED} component={Booked} />
      </Switch>
      <Footer />
    </>
  );
};

export default SiteLayout;
