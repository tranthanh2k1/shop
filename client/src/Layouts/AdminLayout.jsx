import React from "react";
import { Route, Switch } from "react-router";
// import Dashboard from "src/Pages/Private/Dashboard";
import { path } from "../Constants";
import Booking from "../Pages/Private/Booking";
import DetailBookingPage from "../Pages/Private/Booking/detail-booking";
import SearchBookingAdmin from "../Pages/Private/Booking/search-booking";
import Bookingdetail from "../Pages/Private/BookingDetail";
import Header from "../Pages/Private/Commons/Header";
import SlideBar from "../Pages/Private/Commons/SlideBar";
import Dashboard from "../Pages/Private/Dashboard";
import service from "../Pages/Private/Service";
import AddServicePage from "../Pages/Private/Service/add-service";
import EditServicePage from "../Pages/Private/Service/edit-service";
import Users from "../Pages/Private/User";
import PrivateRouter from "../Routes/PrivateRouter";

// import AccountManager from "src/Pages/Private/AccountManager";

const AdminLayout = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <SlideBar />
        <div className="flex flex-col w-full pl-0 md:p-2 md:space-y-4">
          <Header />
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">
              <Switch>
                <PrivateRouter exact path={path.ADMIN_SERVICE} component={service} />
                <PrivateRouter exact path={path.ADD_SERVICE} component={AddServicePage} />
                <PrivateRouter exact path={path.EDIT_SERVICE} component={EditServicePage} />
                <PrivateRouter exact path={path.ADMIN_USER} component={Users} />
                <PrivateRouter exact
                  path={path.ADMIN_BOOKING_DETAIL}
                  component={Bookingdetail}
                />
                <PrivateRouter exact path={path.ADMIN_BOOKING} component={Booking} />
                <PrivateRouter exact path={path.SEARCH_BOOKING} component={SearchBookingAdmin} />
                {/* <PrivateRouter path={path.ADMIN_BOOKING} component={DetailBookingPage} /> */}
                <PrivateRouter exact path={path.ADMIN} component={Dashboard} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
