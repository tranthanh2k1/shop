import React from "react";
import { Link, NavLink } from "react-router-dom";
import { isAuthenticated } from "../../../constant";

const Booked = ({ children }) => {
  const { user } = isAuthenticated()

  return (
    <>
      <div className="pt-[30px] mb-[70px] bg-gray-100">
        <div className="container mx-auto grid grid-cols-[20%,80%]">
          <div className="pr-[15px]">
            <div className="flex items-center">
              <div className="w-[45px] h-[45px] rounded-full flex border border-gray-500">
                <i class="fal fa-user m-auto text-[20px] text-gray-500"></i>
              </div>
              <div className="ml-[15px]">
                <p className="font-bold">{user.username}</p>
                <Link
                  to=""
                  className="text-gray-500 inline-block hover:text-gray-700 text-[14px] mt-[5px]"
                >
                  <span>
                    <i class="fas fa-pen"></i>
                  </span>{" "}
                  Sửa hồ sơ
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-[30px] pt-[25px] pl-[15px]">
              <ul>
                <li>
                  <Link
                    to=""
                    className="text-[15px] text-gray-800 hover:text-blue-700"
                  >
                    <span class="mr-3">
                      <i class="fal fa-user-alt"></i>
                    </span>
                    Tài khoản của tôi
                  </Link>
                </li>
                <li className="mt-4 ">
                  <span class="mr-3">
                    <i class="fal fa-file-invoice"></i>
                  </span>
                  <NavLink
                    to="/user/booked"
                    activeStyle={{ color: '#ee4d2d' }}
                    className="text-[15px] text-gray-800 hover:text-blue-700"
                  >
                    Hóa đơn
                  </NavLink>
                </li>
                <li className="mt-4 ">
                  <Link
                    to=""
                    className="text-[15px] text-gray-800 hover:text-blue-700"
                  >
                    <span class="mr-3">
                      <i class="fal fa-bell"></i>
                    </span>
                    Thông báo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pl-[15px]">
            <div className="flex text-gray-700 border-white bg-white">
              <NavLink
                exact activeStyle={{ color: '#ee4d2d', borderBottom: '2px solid #ee4d2d' }}
                to="/user/booked"
                className="pt-[15px] pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300 hover:text-red-500"
              >
                Tất cả
              </NavLink>
              <NavLink
                exact activeStyle={{ color: '#ee4d2d', borderBottom: '2px solid #ee4d2d' }}
                to="/user/booked/type1"
                className="pt-[15px] pb-[15px] border-b-2 flex-1 overflow-hidden items-center  text-center justify-center border-gray-300 hover:text-red-500"
              >
                Chờ xác nhận
              </NavLink>
              <NavLink
                exact activeStyle={{ color: '#ee4d2d', borderBottom: '2px solid #ee4d2d' }}
                to="/user/booked/type2"
                className="pt-[15px] pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300 hover:text-red-500"
              >
                Xác nhận
              </NavLink>
              <NavLink
                exact activeStyle={{ color: '#ee4d2d', borderBottom: '2px solid #ee4d2d' }}
                to="/user/booked/type3"
                className="pt-[15px] pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300 hover:text-red-500"
              >
                Đang sửa
              </NavLink>
              <NavLink
                exact activeStyle={{ color: '#ee4d2d', borderBottom: '2px solid #ee4d2d' }}
                to="/user/booked/type4"
                className="pt-[15px] pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300 hover:text-red-500"
              >
                Sửa thành công
              </NavLink>
              <NavLink
                exact activeStyle={{ color: '#ee4d2d', borderBottom: '2px solid #ee4d2d' }}
                to="/user/booked/type5"
                className="pt-[15px] pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300 hover:text-red-500"
              >
                Hủy lịch
              </NavLink>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booked;
