import React from "react";
import { Link } from "react-router-dom";

const Booked = () => {
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
                <p className="font-bold">ACE Shop</p>
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
                  <Link
                    to=""
                    className="text-[15px] text-gray-800 hover:text-blue-700"
                  >
                    <span class="mr-3">
                      <i class="fal fa-file-invoice"></i>
                    </span>
                    Hóa đơn
                  </Link>
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
            <div className="flex text-gray-700 mt-[3px]">
              <Link
                to="/user/booked"
                className="pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-red-500"
              >
                Tất cả
              </Link>
              <Link
                to=""
                className="pb-[15px] border-b-2 flex-1 overflow-hidden items-center  text-center justify-center border-gray-300"
              >
                Chờ xác nhận
              </Link>
              <Link
                to=""
                className="pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300"
              >
                Xác nhận
              </Link>
              <Link
                to=""
                className="pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300"
              >
                Đang sửa
              </Link>
              <Link
                to=""
                className="pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300"
              >
                Sửa thành công
              </Link>
              <Link
                to=""
                className="pb-[15px] border-b-2 flex-1 overflow-hidden items-center text-center justify-center border-gray-300"
              >
                Hủy lịch
              </Link>
            </div>
            <form className="py-[12px] my-[12px] flex items-center shadow-sm text-[#212121] bg-[#eaeaea] rounded-[2px]">
              <span className="text-[20px] mx-[15px]">
                <i className="far fa-search"></i>
              </span>
              <input
                type=""
                placeholder="Tìm kiếm theo Mã hóa đơn"
                className="flex-1 text-[14px] leading-[16px] bg-[#eaeaea] focus:outline-none"
              />
            </form>
            <div className="mt-[40px] bg-white shadow-md py-[15px]">
              <div className="px-[20px]">
                <div className="flex justify-end">
                  <p className="text-gray-700">
                    Trạng thái: <span className="text-red-500">Xác nhận</span>
                  </p>
                </div>
                <div className="border-b mt-[10px] border-t border-gray-400 pl-[10px] pt-[15px] pb-[20px] text-[14px]">
                  <p className="text-gray-600 pb-[5px]">
                    Họ tên: Trương Đình Tuyển
                  </p>
                  <p className="text-gray-600 py-[5px]">Số ĐT: 0357885498</p>
                  <p className="text-gray-600 py-[5px]">
                    Địa chỉ: 63 Lê Đức Thọ - Mỹ Đình
                  </p>
                  <p className="text-gray-600 pt-[5px]">
                    Lỗi máy: Bung bản lề laptop Lenovo L340 Ideapad
                  </p>
                </div>
                <div className="pt-[30px] flex justify-end bg-[#faf4e3] pb-[20px]">
                  <div className="text-[14px]">
                    <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                      Thứ 2 - 25/12
                    </button>
                    <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                      9:00 AM
                    </button>
                    <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                      Liên hệ
                    </button>
                    <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                      Hủy lịch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[40px] bg-white shadow-md py-[15px]">
              <div className="px-[20px]">
                <div className="flex justify-end">
                  <p className="text-gray-700">
                    Trạng thái: <span className="text-red-500">Xác nhận</span>
                  </p>
                </div>
                <div className="border-b mt-[10px] border-t border-gray-400 pl-[10px] pt-[15px] pb-[20px] text-[14px]">
                  <p className="text-gray-600 pb-[5px]">
                    Họ tên: Trương Đình Tuyển
                  </p>
                  <p className="text-gray-600 py-[5px]">Số ĐT: 0357885498</p>
                  <p className="text-gray-600 py-[5px]">
                    Địa chỉ: 63 Lê Đức Thọ - Mỹ Đình
                  </p>
                  <p className="text-gray-600 pt-[5px]">
                    Lỗi máy: Bung bản lề laptop Lenovo L340 Ideapad
                  </p>
                </div>
                <div className="pt-[30px] flex justify-end bg-[#faf4e3] pb-[20px]">
                  <div className="text-[14px]">
                    <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                      Thứ 2 - 25/12
                    </button>
                    <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                      9:00 AM
                    </button>
                    <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                      Liên hệ
                    </button>
                    <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                      Hủy lịch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booked;
