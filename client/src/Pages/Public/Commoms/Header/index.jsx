import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../../../Images/ace.png";
import { isAuthenticated } from '../../../../constant'

const Header = () => {
  const [boxUser, setBoxUser] = useState(false);
  const [nav, setNav] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  const { user } = isAuthenticated()

  const pathname = useLocation()
  const history = useHistory()

  useEffect(() => {
    isAuthenticated() && setIsLogged(true)
  }, [pathname, isLogged])

  const signout = (next) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    next()
  }

  return (
    <>
      <div className="bg-[#039ee3]">
        <div className="container mx-auto flex justify-end lg:justify-between">
          <div className="hidden lg:flex items-center">
            <p className="text-white">
              <i class="fas fa-home "></i>
              <span className="ml-[5px] text-[13px]">
                540 Lorem Ipsum New York, AB 90218
              </span>
            </p>
            <p className=" text-white ml-[15px]">
              <i class="fal fa-envelope"></i>
              <span className="ml-[5px] text-[13px]">info@yourdomain.com</span>
            </p>
          </div>
          <div className="flex items-center">
            {/* <div className="text-white text-[15px] mr-[40px] hidden sm:block">
              <span className="mx-[9px] cursor-pointer">
                <i class="fab fa-facebook-f"></i>
              </span>
              <span className="mx-[9px] cursor-pointer">
                <i class="fab fa-google-plus-g"></i>
              </span>
              <span className="mx-[9px] cursor-pointer">
                <i class="fab fa-instagram"></i>
              </span>
              <span className="mx-[9px] cursor-pointer">
                <i class="fab fa-twitter"></i>
              </span>
            </div> */}
            <Link
              to="/makeappointment"
              className=" bg-white text-[14px] hover:bg-black hover:text-white  px-[35px] py-[10px] lg:py-[15px] font-medium"
            >
              Make Appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="m-0 shadow-md">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="w-[50px] py-[7px] lg:py-0 lg:w-[60px]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="">
            <div
              onClick={() => setNav(!nav)}
              className="block lg:hidden text-[36px]"
            >
              <i class="fas fa-bars"></i>
            </div>
            <ul
              className={
                nav
                  ? "fixed lg:static z-[999]  bg-white top-0 left-0 h-[100vh] py-[50px] w-[50vh] lg:w-auto lg:h-auto text-center shadow-xl lg:shadow-none lg:flex text-[15px] font-medium lg:py-[20px]"
                  : "fixed lg:static z-[999]  bg-white top-0 left-0 translate-x-[-100%] lg:translate-x-0 h-[100vh] py-[50px] w-[50vh] lg:w-auto lg:h-auto text-center shadow-xl lg:shadow-none lg:flex text-[15px] font-medium lg:py-[20px]"
              }
            >
              <span
                onClick={() => setNav(!nav)}
                className="block lg:hidden absolute text-[28px] top-[20px] right-[30px]"
              >
                <i class="fal fa-times"></i>
              </span>
              <li className="px-[18px] py-[20px]">
                <Link to="/" className="hover:text-[#039ee3]">
                  HOME
                </Link>
              </li>
              <li className="mx-[18px] py-[20px]">
                <Link to="" className="hover:text-[#039ee3]">
                  ABOUT US
                </Link>
              </li>
              <li className="mx-[18px] py-[20px]">
                <Link to="/services_list" className="hover:text-[#039ee3]">
                  SERVICE
                </Link>
              </li>
              <li className="mx-[18px] py-[20px]">
                <Link to="" className="hover:text-[#039ee3]">
                  BLOG
                </Link>
              </li>
              <li className="mx-[18px] py-[20px]">
                <Link to="/contact" className="hover:text-[#039ee3]">
                  CONTACT
                </Link>
              </li>
              <li className="lg:ml-[18px] lg:mr-[36px] py-[20px]">
                <Link to="" className="hover:text-[#039ee3]">
                  QUOTE
                </Link>
              </li>
              <li
                onClick={() => setBoxUser(!boxUser)}
                className="py-[20px] text-[18px] relative cursor-pointer "
              >
                <i class="fas fa-user"></i>
                {pathname !== 'auth/login' && isLogged ? (
                  <ul
                    className={
                      boxUser
                        ? "absolute w-[150px] right-[50%] translate-x-[20%] top-[80%] z-20  bg-gray-100 rounded-[3px]  block-ul"
                        : "hidden"
                    }
                  >
                    <li className=" text-[14px] text-blue-600 hover:bg-blue-200 ">
                      {" "}
                      <Link
                        to="/auth/register"
                        className="py-[5px] px-[15px] inline-block "
                      >
                        {user.username}
                      </Link>
                    </li>
                    <li className=" text-[14px] text-blue-600 hover:bg-blue-200 ">
                      {" "}
                      <Link
                        to="/user/booked"
                        className="py-[5px] px-[15px] inline-block "
                      >
                        Đơn đặt lịch
                      </Link>
                    </li>
                    <li className=" text-[14px] text-blue-600 hover:bg-blue-200">
                      {" "}
                      <Link
                        to="/"
                        className="py-[5px] px-[15px] inline-block"
                        onClick={() => signout(() => {
                          setIsLogged(false)
                          history.push('/')
                        })}
                      >
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul
                    className={
                      boxUser
                        ? "absolute w-[150px] right-[50%] translate-x-[20%] top-[80%] z-20  bg-gray-100 rounded-[3px]  block-ul"
                        : "hidden"
                    }
                  >
                    <li className=" text-[14px] text-blue-600 hover:bg-blue-200 ">
                      {" "}
                      <Link
                        to="/auth/register"
                        className="py-[5px] px-[15px] inline-block "
                      >
                        Đăng ký
                      </Link>
                    </li>
                    <li className=" text-[14px] text-blue-600 hover:bg-blue-200">
                      {" "}
                      <Link to="/auth/login" className="py-[5px] px-[15px] inline-block">
                        Đăng nhập
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
