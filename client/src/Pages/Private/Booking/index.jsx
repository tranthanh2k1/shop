import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { adminFilterByDateBookingAction, getListBookingAll, listAllBookingStatusAction, todayBookingRepair } from "../../../redux/actions/booking-admin";

const Booking = () => {
  const [date, setDate] = useState('')

  const { listBooking, totalPage, error } = useSelector(state => state.bookingAdmin)

  const dispatch = useDispatch()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery().get("page");

  useEffect(() => {
    if (query) {
      dispatch(getListBookingAll(query))
    } else {
      dispatch(getListBookingAll(1))
    }
  }, [query])

  const convertStatusString = (status) => {
    if (status === 'Wait for confirmation') {
      return {
        content: 'Chờ xác nhận',
        bgr: '#fcaf17'
      }
    } else if (status === 'Confirm') {
      return {
        content: 'Xác nhận',
        bgr: '#45aaf2'
      }
    } else if (status === 'Fixing') {
      return {
        content: 'Đang sửa',
        bgr: '#27ae60'
      }
    } else if (status === 'Successful fix') {
      return {
        content: 'Sửa thành công',
        bgr: '#27ae60'
      }
    } else {
      return {
        content: 'Hủy lịch',
        bgr: '#ee4d2d'
      }
    }
  }

  const dataOption = [
    {
      value: "Wait for confirmation",
      content: "Chờ xác nhận"
    },
    {
      value: "Confirm",
      content: "Xác nhận"
    },
    {
      value: "Fixing",
      content: "Đang sửa"
    },
    {
      value: "Successful fix",
      content: "Sửa thành công"
    },
    {
      value: "Cancellation of booking",
      content: "Đã hủy"
    },
  ]

  const paginationRef = useRef(null)
  const inputDateRef = useRef(date)

  const handleSelectStatus = (e) => {
    if (e.target.value === 'all') {
      // paginationRef.current.style.display = 'block'
      return dispatch(getListBookingAll(1))
    }

    if (e.target.value === 'today') {
      return dispatch(todayBookingRepair())
    }

    const dataReq = {
      status: e.target.value
    }

    dispatch(listAllBookingStatusAction(dataReq))

    setDate('')
    inputDateRef.current.value = ""

    // paginationRef.current.style.display = 'none'
  }

  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleFilterDateOrder = () => {
    dispatch(adminFilterByDateBookingAction(date))
  }


  return (
    <>
      <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">
          <div className="px-0">
            <p className="text-[22px] font-medium ">Danh sách đơn đặt lịch</p>
            <Link to="/admin/booking/make-appointment">Đặt lich</Link>
            <div className="grid grid-cols-3 gap-[40px] mt-[25px]">
              <form action="/admin/booking/search" className="flex items-center mt-[20px]">
                <input
                  type="text"
                  placeholder="Tìm kiếm theo mã"
                  name="code"
                  className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-[63%] lg:w-[65%] focus:outline-none focus:border focus:border-gray-700"
                />
                <button
                  type="submit"
                  className="ml-1 bg-blue-500 text-white text-[14px] rounded-[3px] px-[15px] py-[4px]"
                >
                  Tìm kiếm
                </button>
              </form>
              <div>
                <p className="text-[14px]">Lọc đơn hàng theo ngày: {date}</p>
                <div className="flex items-center ">
                  <br />
                  <input
                    type="date"
                    placeholder="Tìm kiếm"
                    className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-[65%] lg:w-[70%] focus:outline-none focus:border focus:border-gray-700"
                    onChange={handleDate}
                    ref={inputDateRef}
                  />
                  <button
                    className="ml-1 bg-red-500 text-white text-[14px] rounded-[3px] px-[15px] py-[4px]"
                    onClick={handleFilterDateOrder}
                  >
                    Lọc
                  </button>
                </div>
              </div>
              <form action="">
                <select
                  name=""
                  id=""
                  className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-full mt-[23px]"
                  onChange={handleSelectStatus}
                >
                  <option selected value="all">Tất cả</option>
                  {dataOption.map(item => (
                    <>
                      <option key={item.value} value={item.value}>{item.content}</option>
                    </>
                  ))}
                  <option value="today">Đơn sửa trong ngày hôm nay</option>
                </select>
              </form>
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-[0.5fr,1fr,1fr,1.2fr,0.8fr] font-medium pb-[15px] border-b-2 border-gray-500 px-[10px]">
              <div>#</div>
              <div>Tên</div>
              <div>Thời gian tạo</div>
              <div>Trạng thái</div>
              <div></div>
            </div>
            <div className="text-[14px]">
              {listBooking.map((item, index) => (
                <div key={index} className="grid grid-cols-[0.5fr,1fr,1fr,1.2fr,0.8fr] py-[10px] border-b border-gray-300 px-[10px]">
                  <div className="font-medium">{item.code_bill}</div>
                  <div className="pr-[10px]">{item.name}</div>
                  <div className="pr-[10px]">
                    <Moment format="hh:mm' DD/MM/YYYY">
                      {item.createdAt}
                    </Moment>
                  </div>
                  <div className="">
                    <button
                      className="text-white px-2 py-1 bg-yellow-400 rounded-[5px]"
                      style={{ backgroundColor: `${convertStatusString(item.status).bgr}` }}>
                      {convertStatusString(item.status).content}
                    </button>
                  </div>
                  <div className="">
                    <Link to={`/admin/booking/detail/${item._id}`} className="text-white px-2 py-1 bg-green-400 rounded-[5px]">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalPage && (
            <div class="flex flex-col items-center my-12">
              <div class="flex text-gray-700">
                {query > 1 && (
                  <Link
                    to={`/admin/booking/list?page=${Number(query) - 1}`}
                    class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Link>
                )}
                <div class="flex h-12 font-medium rounded-full bg-gray-200">
                  {Array(totalPage).fill(1).map((item, index) => (
                    <NavLink key={index + 1}
                      // ref={navLinkRef}
                      // exact
                      // activeStyle={{ color: 'red' }}
                      to={`/admin/booking/list?page=${index + 1}`}
                      class="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
                    // onClick={handleColorBG}
                    >{index + 1}
                    </NavLink>
                  ))}
                </div>
                {query < totalPage && (
                  <Link
                    to={`/admin/booking/list?page=${Number(query) + 1}`}
                    class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  );
};

export default Booking;
