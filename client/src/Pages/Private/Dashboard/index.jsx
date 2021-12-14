import React, { useEffect, useState } from "react";
import axios from 'axios'
import { API, convertNumber } from '../../../constant'

const Dashboard = () => {
  const [date, setDate] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  const [businessResultDay, setBusinessResultDay] = useState({})

  const [choseFilter, setChoseFilter] = useState('Thống kê theo ngày')

  const dataChoseFilter = ['Thống kê theo ngày', 'Thống kê theo nhiều ngày']

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

  const totalMoney = businessResultDay.totalBookingDay && businessResultDay.totalBookingDay.reduce((acc, item) => {
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
                      {/* <div className="w-full lg:w-1/4">
                          <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
                            <div className="flex items-center">
                              <div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                              </div>
                              <div className="flex flex-col justify-center">
                                <div className="text-lg">230k</div>
                                <div className="text-sm text-gray-400">Sales</div>
                              </div>
                            </div>
                          </div>
                        </div> */}
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
      </div>
    </>
  );
};

export default Dashboard;
