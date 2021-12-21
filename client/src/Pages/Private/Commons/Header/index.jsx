import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'
// import { path } from "src/Constants/";
// import { ActionLogout } from "src/Redux/Actions/Auth.action";

const Header = () => {
  const [boxUser, setBoxUser] = useState(false);
  const [notitify, setNotitify] = useState(false);
  function handlernoty() {
    setNotitify(!notitify);
  }
  const popupNoti =
    <div class="dropdown-list drop-style flex-1 w-32 " aria-labelledby="alertsDropdown">
      <h6 class="dropdown-header">
        Thông báo
      </h6>
      <a className="dropdown-item  ">
        <div className='content' >
          <div className="small text-gray-500">December 12, 2019</div>
          <span className="font-weight-bold">A new monthly report is ready to download!</span>
        </div>
      </a>
      <a className="dropdown-item  ">
        <div className='content' >
          <div className="small text-gray-500">December 12, 2019</div>
          <span className="font-weight-bold">A new monthly report is ready to download!</span>
        </div>
      </a>
      <a className="dropdown-item  ">
        <div className='content' >
          <div className="small text-gray-500">December 12, 2019</div>
          <span className="font-weight-bold">A new monthly report is ready to download!</span>
        </div>
      </a>
    </div>

  return (
    <header className="w-full bg-white dark:bg-gray-700 items-center h-16 rounded-xl z-40">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-[20px] flex w-full lg:max-w-68 sm:pr-[30px] sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-full">
            <div className="relative flex items-center w-full lg:w-64 h-full group ">
              { notitify? popupNoti : null }
            </div>
          </div>
          <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <span className="noti-box" onClick={handlernoty}>
              <i class="far fa-bell"></i>
            </span>

            <div className="relative flex items-center">

              <span className="mr-[20px] text-[18px]">
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
