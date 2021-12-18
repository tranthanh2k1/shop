import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { API, convertNumber, convertStatusString, isAuthenticated } from "../../../constant";
import Moment from 'react-moment'

const ListAllBookedUserPage = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([])

    const { token } = isAuthenticated()

    const history = useHistory()

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.get(`${API}/booking/user`, {
                headers: {
                    Accept: "appliaction/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })

            setListAllBookingUser(data.listBooking)
        }

        getListBookingUser()
    }, [])

    const handleCancelBooking = async (id) => {
        try {
            const { data } = await axios.get(`${API}/booking/cancel/${id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })

            if (data.success) {
                alert("Bạn hủy lịch thành công")
                history.push('/user/booked/type5')
            }
        } catch (error) {
            console.log("error", error.response)
        }
    }

    return (
        <div>
            <form className="py-[12px] my-[12px] flex items-center shadow-sm text-[#212121] bg-[#eaeaea] rounded-[2px]">
                <span className="text-[20px] mx-[15px]">
                    <i className="far fa-search"></i>
                </span>
                <input
                    type="text"
                    placeholder="Tìm kiếm theo Mã hóa đơn"
                    className="flex-1 text-[14px] leading-[16px] bg-[#eaeaea] focus:outline-none"
                />
            </form>
            {listAllBookingUser.length > 0 ? listAllBookingUser.map((item) => (
                <div key={item._id} className="mt-[20px] bg-white shadow-md py-[15px]">
                    <div className="px-[20px]">
                        <div className="flex justify-end mt-[5px]">
                            <p className="text-gray-700">
                                <span style={{ backgroundColor: `${convertStatusString(item.status).bgr}` }} className="text-white p-2 rounded-2xl">
                                    {convertStatusString(item.status).content}
                                </span>
                            </p>
                        </div>
                        <div className="border-gray-400 pl-[10px] pb-[20px] text-[15px] font-medium">
                            <p className="text-gray-600 pb-[5px] text-[16px] font-bold">
                                Mã hóa đơn: #{item.code_bill}
                            </p>
                            <p className="text-gray-600 pb-[5px]">
                                Họ tên: {item.name}
                            </p>
                            <p className="text-gray-600 py-[5px]">Số ĐT: {item.phone}</p>
                            <p className="text-gray-600 py-[5px]">
                                Địa chỉ: {item.address}
                            </p>
                            <p className="text-gray-600 pt-[5px]">
                                Mô tả lỗi: {item.description_error}
                            </p>
                            <p className="text-gray-600 pt-[5px]">
                                Dịch vụ: {item?.service_id?.name || 'không tìm thấy dịch vụ'}
                            </p>
                            {item.total_price && (
                                <p className="text-gray-600 pt-[5px] font-bold">
                                    Thành tiền: {convertNumber(item.total_price)}đ
                                </p>
                            )}
                        </div>
                        <div className="flex justify-end pb-[20px]">
                            <div className="text-[14px]">
                                <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                                    <Moment format="DD/MM/YYYY">
                                        {item.repair_time}
                                    </Moment>
                                </button>
                                <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                                    {item.correction_time}
                                </button>
                                <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                    Liên hệ
                                </button>
                                {item.status === 'Wait for confirmation' && (
                                    <button onClick={() => handleCancelBooking(item._id)} className="text-gray-700 hover:bg-red-500 hover:text-white border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                        Hủy lịch
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )) : ('Không tìm thấy đơn đặt lịch nào')}
        </div>
    )
}

export default ListAllBookedUserPage
