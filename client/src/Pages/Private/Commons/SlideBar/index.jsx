import React from "react";
import { Link, NavLink } from "react-router-dom";
import { path } from "../../../../Constants";
// import { Icon } from "src/Components/Icon";
// import { path } from "src/Constants/";

const SlideBar = () => {
  return (
    <div className="h-screen hidden lg:block shadow-lg relative w-80">
      <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
        <Link className="flex items-center py-6 px-4 border-b">
          <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">
            ADCShop
          </span>
        </Link>
        <nav className="">
          <Link
            exact
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500  dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to={path.ADMIN}
          >
            <span className="text-left">
              <i class="far fa-tachometer-alt-fast"></i>
            </span>
            <span className="mx-4 text-sm font-normal">Dashboard</span>
          </Link>
          <Link
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/admin/service/list"
          >
            <span className="text-left">
              <i class="far fa-tachometer-alt-fast"></i>
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý Service</span>
          </Link>
          <Link
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/admin/booking/list"
          >
            <span className="text-left">
              <i class="far fa-tachometer-alt-fast"></i>
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý Booking</span>
          </Link>
          <Link
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/admin/user"
          >
            <span className="text-left">
              <i class="far fa-tachometer-alt-fast"></i>
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý User</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SlideBar;
