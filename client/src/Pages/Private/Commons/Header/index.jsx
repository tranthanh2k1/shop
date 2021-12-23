import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { API, isAuthenticated } from '../../../../constant'
import './header.css'
import moment from 'moment'

const Header = () => {
  const [boxUser, setBoxUser] = useState(false);
  const [isLogged, setIsLogged] = useState(false)
  const [repairToday, setRepairToday] = useState([])
  console.log("datann", repairToday)

  const { user } = isAuthenticated()

  const pathname = useLocation()
  const history = useHistory()

  useEffect(() => {
    isAuthenticated() && setIsLogged(true)
  }, [pathname, isLogged])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${API}/booking/admin/notificationRepair`)

      setRepairToday(data)
    }

    fetchData()
  }, [])

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

  const [notitify, setNotitify] = useState(false);

  function handlernoty() {
    setNotitify(!notitify);
  }

  function correctionFn(correction, repair) {
    // var dateObj = new Date();
    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();
    // console.log("re", repair)

    // const newdate = year + "/" + month + "/" + day;
    const date = moment(repair).format("YYYY/MM/DD")

    const correctionWarning = moment(new Date(`${date} ${correction}`)).subtract(15, "minutes").format("")

    const timeNow = moment(new Date()).format("")

    if (timeNow >= correctionWarning) {
      return 'warning'
    } else {
      return 'not'
    }
  }

  const popupNoti = <div className="dropdown-list drop-style flex-1" aria-labelledby="alertsDropdown">
    <h6 className="dropdown-header">
      Thông báo
    </h6>
    {repairToday.length > 0 ? (repairToday.map(item => (
      <div>
        <Link to="" key={item._id} className="dropdown-item">
          <div className={correctionFn(item.correction_time, item.repair_time)}>
            <p>Mã đơn: #{item.code_bill}</p>
            <p className="font-weight-bold">Lỗi máy: {item.description_error}</p>
            <div className="small text-gray-500">Thời gian hẹn sửa: {item.correction_time}</div>
            <p>Trạng thái: {item.status}</p>
          </div>
        </Link>
      </div>
    ))) : (
      <Link to="" className="dropdown-item">
        <div className='content'>
          <p className="font-weight-bold">Hôm nay không có đơn nào</p>
        </div>
      </Link>
    )}
  </div>

  return (
    <header className="w-full bg-white dark:bg-gray-700 items-center h-16 rounded-xl z-40">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-[20px] flex w-full lg:max-w-68 sm:pr-[30px] sm:ml-0">
          <div className="container relative left-0 z-50 flex w-4/4 h-full flex justify-end">
            <div className="relative items-center w-full lg:w-64 h-full group ml-[50px]">
              {notitify ? popupNoti : null}
            </div>
          </div>
          <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <span className="noti-box" onClick={handlernoty}>
              <i class="far fa-bell" style={{ color: 'black' }}></i>
            </span>

            <div className="relative flex items-center">

              <span className="mr-[20px] text-[18px]">
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
                      >
                        Trang chủ
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
