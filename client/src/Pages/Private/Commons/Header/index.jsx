import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { path } from "src/Constants/";
// import { ActionLogout } from "src/Redux/Actions/Auth.action";

const Header = () => {
  const [boxUser, setBoxUser] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-700 items-center h-16 rounded-xl z-40">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-[20px] flex w-full lg:max-w-68 sm:pr-[30px] sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-full">
            <div className="relative flex items-center w-full lg:w-64 h-full group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 z-20 w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 block"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"></path>
              </svg>
              <input
                type="text"
                className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <div className="relative flex items-center">
              <span className="mr-[20px] text-[18px]">
                <i class="far fa-bell"></i>
              </span>
              <div className="w-[35px] h-[35px] cursor-pointer flex bg-gray-300 rounded-full mr-[20px]">
                {" "}
                <span className="text-[16px] font-bold m-auto">T</span>
              </div>
              <span
                onClick={() => setBoxUser(!boxUser)}
                className="relative text-[18px] cursor-pointer"
              >
                <i class="far fa-ellipsis-h"></i>
                <ul
                  className={
                    boxUser
                      ? "absolute w-[150px] right-[50%] translate-x-[20%] top-[120%]  z-20  bg-gray-100 rounded-[3px]  block-ul"
                      : "hidden"
                  }
                >
                  <li className=" text-[14px] text-blue-600 hover:bg-blue-200 ">
                    {" "}
                    <Link
                      to="/auth/lognin"
                      className="py-[5px] px-[15px] inline-block "
                    >
                      Đăng nhập
                    </Link>
                  </li>

                  <li className=" text-[14px] text-blue-600 hover:bg-blue-200">
                    {" "}
                    <Link to="" className="py-[5px] px-[15px] inline-block">
                      Admin
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
