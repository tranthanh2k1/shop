import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { path } from "../Constants";
import AuthLayout from "../Layouts/AuthLayout";
import SiteLayout from "../Layouts/SiteLayout";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AdminLayout from "../Layouts/AdminLayout";
import HomePage from "../Pages/Public/HomePage";
import ListServicePage from "../Pages/Private/Service";
import AddServicePage from "../Pages/Private/Service/add-service";
import EditServicePage from "../Pages/Private/Service/edit-service";
import Booking from "../Pages/Private/Booking";
import DetailBookingPage from "../Pages/Private/Booking/detail-booking";
import SearchBookingAdmin from "../Pages/Private/Booking/search-booking";
import MakeAppointment from "../Pages/Public/MakeAppointmentPage";
import Booked from "../Pages/Public/Booked";
import ServicesList from "../Pages/Public/ServicesList";
import ServiceDetail from "../Pages/Public/ServiceDetail";
import ContactPage from "../Pages/Public/ContactPage";
import Bookingdetail from "../Pages/Private/BookingDetail";
import WaitForComfirmationPage from "../Pages/Public/Booked/wait-confirmation";
import ConfirmBookingUser from "../Pages/Public/Booked/confirm";
import ListBookedFixingUser from "../Pages/Public/Booked/fixing";
import SuccessfullBookedPage from "../Pages/Public/Booked/successfull";
import CencelledBookedUserPage from "../Pages/Public/Booked/cencelled";
import ListAllBookedUserPage from "../Pages/Public/Booked/listAllBookedUser";

const RootRoute = () => {
  return (
    // <Router>
    //   <Switch>
    //     <PrivateRouter path={path.ADMIN} component={AdminLayout} />
    //     <PublicRouter path={path.AUTH} component={AuthLayout} />
    //     <PublicRouter path={path.HOME} component={SiteLayout} />
    //   </Switch>
    // </Router>
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?">
          <AdminLayout>
            <Switch>
              <PrivateRouter exact path="/admin">
                <Redirect to="/admin/dashboard" />
              </PrivateRouter>
              {/* <PrivateRouter exact path="/admin/dashboard">
                <AdminDashboard title="Dịch vụ" />
              </PrivateRouter> */}
              <PrivateRouter exact path="/admin/service/list">
                <ListServicePage title="Dịch vụ" />
              </PrivateRouter>
              <PrivateRouter exact path="/admin/service/add">
                <AddServicePage title="Dịch vụ" />
              </PrivateRouter>
              <PrivateRouter exact path="/admin/service/edit/:id">
                <EditServicePage title="Dịch vụ" />
              </PrivateRouter>
              <PrivateRouter exact path="/admin/booking/list">
                <Booking />
              </PrivateRouter>
              <PrivateRouter exact path="/admin/booking/detail/:id">
                <Bookingdetail />
              </PrivateRouter>
              <PrivateRouter exact path="/admin/booking/search">
                <SearchBookingAdmin />
              </PrivateRouter>
              <PrivateRouter exact path="/admin/**">
                hello
              </PrivateRouter>
            </Switch>
          </AdminLayout>
        </Route>
        <PublicRouter path={path.AUTH} component={AuthLayout} />
        <Route path="/">
          <SiteLayout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path={path.SERVICES_LIST} component={ServicesList} />
              <Route exact path={path.SERVICES_DETAIL} component={ServiceDetail} />
              <Route path={path.MAKEAPPOINTMENT} component={MakeAppointment} />
              <Route path={path.CONTACT} component={ContactPage} />
              {/* <BookedUserPage> */}
              {/* <Switch> */}
              <Booked>
                <Switch>
                  <Route exact path="/user/booked">
                    <ListAllBookedUserPage />
                  </Route>
                  <Route exact path="/user/booked/type1">
                    <WaitForComfirmationPage />
                  </Route>
                  <Route exact path="/user/booked/type2">
                    <ConfirmBookingUser />
                  </Route>
                  <Route exact path="/user/booked/type3">
                    <ListBookedFixingUser />
                  </Route>
                  <Route exact path="/user/booked/type4">
                    <SuccessfullBookedPage />
                  </Route>
                  <Route exact path="/user/booked/type5">
                    <CencelledBookedUserPage />
                  </Route>
                </Switch>
              </Booked>

              {/* <Route exact path="/user/booked/type1">
                    <WaitForComfirmationPage />
                  </Route>
                  <Route exact path="/user/booked/type2">
                    <ConfirmBookingUser />
                  </Route>
                  <Route exact path="/user/booked/type3">
                    <ListBookedFixingUser />
                  </Route>
                  <Route exact path="/user/booked/type4">
                    <SuccessfullBookedPage />
                  </Route>
                  <Route exact path="/user/booked/type5">
                    <CencelledBookedUserPage />
                  </Route> */}
            </Switch>
            {/* </BookedUserPage> */}
            {/* </Switch> */}
          </SiteLayout>
        </Route>

      </Switch>
    </Router>
  );
};

export default RootRoute;
