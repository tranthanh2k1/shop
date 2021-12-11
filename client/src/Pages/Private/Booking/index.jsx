import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { adminFilterByDateBookingAction, getListBookingAll, listAllBookingStatusAction } from "../../../redux/actions/booking-admin";

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
            <div className="grid grid-cols-3 gap-[40px] mt-[25px]">
              <form action="/admin/booking/search" className="flex items-center mt-[20px]">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  name="code"
                  className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-[63%] lg:w-[65%] focus:outline-none focus:border focus:border-gray-700"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-[14px] rounded-[3px] px-[15px] py-[4px]"
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
                    className="bg-red-500 text-white text-[14px] rounded-[3px] px-[15px] py-[4px]"
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
                </select>
              </form>
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-[0.5fr,1fr,1fr,1.2fr,0.8fr] font-medium pb-[15px] border-b-2 border-gray-500 px-[10px]">
              <div>#</div>
              <div>Tên</div>
              <div>Thời gian</div>
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
                    <button className="text-white px-2 py-1 bg-green-400 rounded-[5px]">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalPage && (
            <nav aria-label="Page navigation example" ref={paginationRef}>
              <ul className="pagination">
                <li className="page-item">
                  {query > 1 && (
                    <Link
                      className='page-link'
                      to={`/admin/booking/list?page=${Number(query) - 1}`}
                    >
                      Previous
                    </Link>
                  )}
                </li>
                {Array(totalPage).fill(1).map((item, index) => (
                  <li className="page-item" key={index}>
                    <Link
                      className="page-link"
                      to={`/admin/booking/list?page=${index + 1}`}
                    >{index + 1}</Link>
                  </li>
                ))}
                <li className="page-item">
                  {query < totalPage && (
                    <Link
                      className="page-link"
                      to={`/admin/booking/list?page=${Number(query) + 1}`}
                    >
                      Next
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;
