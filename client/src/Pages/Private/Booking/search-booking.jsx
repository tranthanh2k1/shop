import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Table } from 'reactstrap';
import Moment from 'react-moment';
import { API, isAuthenticated } from '../../../constant';

const SearchBookingAdmin = () => {
    const [booking, setBooking] = useState({})
    const [error, setError] = useState('')

    const { token } = isAuthenticated()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery().get("code");

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
        const getOrderSearch = async () => {
            try {
                const { data } = await axios.get(`${API}/booking/admin/search`, {
                    params: {
                        code: query
                    },
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })

                setBooking(data.searchBooking)
            } catch (error) {
                setError(error.response.data.message)
            }
        }

        getOrderSearch()
    }, [query])

    return (
        <>
            <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
                <div className="mb-1 w-full ">
                    <div className="px-0">
                        <p className="text-[22px] font-medium ">Tìm kiếm đơn đặt lịch</p>
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
                            {booking.code_bill ? (
                                <div className="grid grid-cols-[0.5fr,1fr,1fr,1.2fr,0.8fr] py-[10px] border-b border-gray-300 px-[10px]">
                                    <div className="font-medium">{booking.code_bill}</div>
                                    <div className="pr-[10px]">{booking.name}</div>
                                    <div className="pr-[10px]">
                                        <Moment format="hh:mm' DD/MM/YYYY">
                                            {booking.createdAt}
                                        </Moment>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-white px-2 py-1 bg-yellow-400 rounded-[5px]"
                                            style={{ backgroundColor: `${convertStatusString(booking.status).bgr}` }}>
                                            {convertStatusString(booking.status).content}
                                        </button>
                                    </div>
                                    <div className="">
                                        <Link to={`/admin/booking/detail/${booking._id}`} className="text-white px-2 py-1 bg-green-400 rounded-[5px]">
                                            Xem chi tiết
                                        </Link>
                                    </div>
                                </div>
                            ) : ('không tìm thấy đơn đặt lịch nào')}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SearchBookingAdmin
