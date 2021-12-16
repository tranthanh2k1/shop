import React, { useEffect, useState } from "react";
import axios from 'axios'
import { API, convertNumber } from '../../../constant'
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Dashboard = () => {
  const [totalBooking, setTotalBooking] = useState([])
  const [date, setDate] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  const [businessResultDay, setBusinessResultDay] = useState({})

  const [choseFilter, setChoseFilter] = useState('Thống kê theo ngày')

  const dataChoseFilter = ['Thống kê theo ngày', 'Thống kê theo nhiều ngày']

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API}/booking/admin/businessResultDay`)

        setBusinessResultDay(data)
      } catch (error) {
        console.log("error", error.response)
      }
    }

    fetchData()
  }, [])

  const handleSelectFilter = e => {
    setChoseFilter(e.target.value)
    setTotalBooking([])
    setDate('')
    setDateStart('')
    setDateEnd('')
  }

  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleDateStart = e => {
    setDateStart(e.target.value)
  }

  const handleDateEnd = e => {
    setDateEnd(e.target.value)
  }

  const revenueDay = async () => {
    try {
      const { data } = await axios.post(`${API}/booking/admin/revenueByDay`, { date })

      setTotalBooking(data)
    } catch (error) {
      console.log("error", error.response)
    }
  }

  const revenueByDays = async () => {
    try {
      const { data } = await axios.post(`${API}/booking/admin/revenueByDays`, { dateStart, dateEnd })

      setTotalBooking(data)
    } catch (error) {
      console.log("error", error.response)
    }
  }

  const totalMoney = businessResultDay.totalBookingDay && businessResultDay.totalBookingDay.reduce((acc, item) => {
    return acc + Number(item.total_price)
  }, 0)

  const totalRevenue = totalBooking && totalBooking.reduce((acc, item) => {
    return acc + Number(item.total_price)
  }, 0)

  return (
    <>
      <div className="p-4 bg-white block w-full items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">Thống kê doanh thu</div>
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
          <div className="mb-1 w-full ">
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div className="container mx-auto px-6 py-8">
                <h3 className="text-gray-700 text-3xl font-medium">Kết quả kinh doanh trong ngày</h3>
                <div className="">
                  <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                      <div className="w-full lg:w-1/3">
                        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
                          <div className="flex items-center">
                            <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <div className="text-lg">{businessResultDay && convertNumber(Number(totalMoney))}đ</div>
                              <div className="text-sm text-gray-400">Doanh thu</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/3">
                        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
                          <div className="flex items-center">
                            <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <div className="text-lg">{businessResultDay.waitBooking}</div>
                              <div className="text-sm text-gray-400">Đơn đặt mới</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/3">
                        <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
                          <div className="flex items-center">
                            <div className="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <div className="text-lg">{businessResultDay.cancelBooking}</div>
                              <div className="text-sm text-gray-400">Đơn hủy</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
              onChange={handleSelectFilter}
            >
              {dataChoseFilter.map(item => (
                <>
                  <option
                    key={item}
                    value={item}
                    selected={choseFilter === item}
                  >{item}</option>
                </>
              ))}
            </select>
          </div>
        </div>

        {choseFilter === 'Thống kê theo ngày' && (
          <>
            <h5>Thống kê doanh thu của ngày <span>{date}</span> là: {totalBooking && convertNumber(convertNumber(totalRevenue))}đ</h5>
            <div>
              <input
                type="date"
                className="border border-[#e1e1e1] h-[27px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                onChange={handleDate}
              />
              <button onClick={revenueDay} className='bg-red-500 text-white text-[14px] rounded-[3px] ml-[5px] px-[15px] py-[4px]'>Lọc</button>
            </div>
          </>
        )}

        {choseFilter === 'Thống kê theo nhiều ngày' && (
          <>
            <h5>Thống kê doanh thu từ ngày: <span>{dateStart || '...'}</span> đến ngày: <span>{dateEnd || '...'} là: {totalBooking && convertNumber(convertNumber(totalRevenue))}đ</span></h5>
            <div>
              <input
                className="border border-[#e1e1e1] h-[27px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                type="date"
                onChange={handleDateStart}
              />
              <input
                className="border border-[#e1e1e1] h-[27px] ml-[5px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                type="date"
                onChange={handleDateEnd}
              />
              <button
                onClick={revenueByDays}
                className='bg-red-500 text-white text-[14px] rounded-[3px] ml-[5px] px-[15px] py-[4px]'>
                Lọc
              </button>
            </div>
          </>
        )}

        {totalBooking.length > 0 ? (
          <div className="mb-1 w-full ">
            <div className="mt-[50px]">
              <div className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.6fr,0.8fr] font-medium pb-[15px] border-b-2 border-gray-500 px-[10px]">
                <div>#</div>
                <div>Tên</div>
                <div>Thời gian thanh toán</div>
                <div>Trạng thái</div>
                <div>Thành tiền</div>
                <div></div>
              </div>
              <div className="text-[14px]">
                {totalBooking.map((item, index) => (
                  <div key={index} className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.6fr,0.8fr] py-[10px] border-b border-gray-300 px-[10px]">
                    <div className="font-medium">{item.code_bill}</div>
                    <div className="pr-[10px]">{item.name}</div>
                    <div className="pr-[10px]">
                      <Moment format="hh:mm' DD/MM/YYYY">
                        {item.updated_success}
                      </Moment>
                    </div>
                    <div className="">
                      <button
                        className="text-white px-2 py-1 bg-yellow-400 rounded-[5px]"
                        style={{ backgroundColor: `${convertStatusString(item.status).bgr}` }}>
                        {convertStatusString(item.status).content}
                      </button>
                    </div>
                    <div className="pr-[50px] text-right font-medium">{convertNumber(item.total_price)}đ</div>
                    <div className="">
                      <Link to={`/admin/booking/detail/${item._id}`} className="text-white px-2 py-1 bg-green-400 rounded-[5px]">
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>) : 'Không tìm thấy đơn đặt lịch nào'}
      </div>
    </>
  );
};

export default Dashboard;
