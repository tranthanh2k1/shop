
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { isAuthenticated } from '../../../../constant'
// import { path } from "src/Constants/";
// import { ActionLogout } from "src/Redux/Actions/Auth.action";

const Header = () => {
  const [boxUser, setBoxUser] = useState(false);
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

  function splitName() {
    const lastName = user.username.split(' ')

    return lastName[lastName.length - 1]
  }

  return (
    <header className="w-full bg-white dark:bg-gray-700 items-center h-16 rounded-xl z-40">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-[20px] flex w-full lg:max-w-68 sm:pr-[30px] sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-full">
            <div className="relative flex items-center w-full lg:w-64 h-full group">
            </div>
          </div>
          <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <div className="relative flex items-center">
              <span className="mr-[20px] text-[18px]">
                <i class="far fa-bell"></i>
              </span>
              {user && (
                <div className="py-[20px] ml-[15px] mt-[6px] text-sm">
                  <Link to="" className="hover:text-[#039ee3]">
                    Xin chào,{splitName()}
                  </Link>
                </div>
              )}
              <div
                onClick={() => setBoxUser(!boxUser)}
                className="py-[20px] ml-[5px] text-[18px] relative cursor-pointer"
              >
                <i className="fas fa-user"></i>
                {pathname !== 'auth/login' && isLogged ? (
                  <ul
                    className={
                      boxUser
                        ? "absolute w-[150px] right-[50%] translate-x-[20%] top-[80%] z-20 bg-gray-100 rounded-[3px]  block-ul"
                        : "hidden"
                    }
                  >
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
