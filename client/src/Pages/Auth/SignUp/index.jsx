import React from "react";
import { Link } from "react-router-dom";
import imgSignup from "../../../Images/signup-image.jpg";
import iconback from "../../../Images/iconBack.png";

const SignUp = () => {
  return (
    <>
    <div className="bg-white md:bg-gray-100 h-[100vh] flex relative">
      <div className="w-[40px] absolute top-[20px] left-[50px] cursor-pointer">
        {" "}
        <img src={iconback} alt="" className="w-full" />
      </div>
      <div className="w-[900px] m-auto bg-white md:shadow-xl rounded-[30px] py-[70px]  ">
        <div className="md:grid grid-cols-2">
          <div className="px-[15px] sm:px-[30px] text-center md:text-left lg:pr-[90px] lg:pl-[100px]">
            
            <p className="text-[#222] text-[36px] font-bold">Đăng ký</p>
            <form action="" className="mt-[45px]">

              <div className="relative mb-[25px]">
                <label htmlFor="" className="absolute bottom-[5px]">
                  <i class="fas fa-user text-[14px]"></i>
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                  placeholder="Your Name"
                />
              </div>

              <div className="relative mb-[25px]">
                <label htmlFor="" className="absolute bottom-[5px]">
                  <i class="fas fa-phone text-[14px]"></i>
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                  placeholder="Your Phone"
                />
              </div>

              <div className="relative mb-[25px]">
                <label htmlFor="" className="absolute bottom-[5px]">
                  <i class="fas fa-envelope text-[14px]"></i>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                  placeholder="Your Email"
                />
              </div>

              <div className="relative mb-[25px]">
                <label htmlFor="" className="absolute bottom-[5px]">
                  <i class="fal fa-lock-alt text-[14px]"></i>
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                  placeholder="Your password"
                />
              </div>

              <button type="submit" className="bg-[#6dabe4] px-[39px] mt-[20px] py-[15px] border-none rounded-[5px] text-[14px] text-white">
                Register
              </button>
            </form>

            <Link
              to="/auth/login"
              className="block md:hidden text-center mt-[40px] text-gray-700 underline hover:text-blue-700"
            >
              Đăng nhập tài khoản
            </Link>
          </div>

          <div className="hidden md:block pl-[30px] pr-[30px] lg:pl-[45px] lg:pr-[20px] mt-[10px]">
            <img src={imgSignup} alt="" />

            <Link
              to="/auth/login"
              className="block text-center mt-[40px] text-gray-700 hover:text-blue-700"
            >
            Đăng nhập tài khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SignUp;
