import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from 'react-moment'
import { useHistory } from "react-router-dom";
import { API, convertStatusString, isAuthenticated } from "../../../constant";

const WaitForComfirmationPage = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([]);
    const [modal, setModal] = useState(false)

    const { token } = isAuthenticated();

    const history = useHistory()

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.get(`${API}/booking/user/status`, {
                params: {
                    status: "Wait for confirmation",
                },
                headers: {
                    Accept: "appliaction/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            setListAllBookingUser(data.listBooking);
        };

        getListBookingUser();
    }, []);

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
                alert("Bạn đã hủy thành công")
                history.push('/user/booked/type5')
            }
        } catch (error) {
            console.log("error", error.response)
        }
    }


    return (
        <div>
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
                            {/* <p className="text-gray-600 py-[5px]">
                                Địa chỉ: {item.address}
                            </p> */}
                            <p className="text-gray-600 pt-[5px]">
                                Khách hàng mô tả lỗi: {item.description_error}
                            </p>
                            <p className="text-gray-600 pt-[5px]">
                                Dịch vụ: {item?.service_id?.name || 'không tìm thấy dịch vụ'}
                            </p>
                        </div>
                        {/* <div className="flex justify-end pb-[20px]">
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
                                <button onClick={() => handleCancelBooking(item._id)} className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                    Hủy lịch
                                </button>
                            </div>
                        </div> */}
                        <div className=" pb-[20px]">
                            <div className="text-[14px] flex justify-between">
                                <div className="">
                                    <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                                        Ngày hẹn sửa:
                                        <Moment format=" DD/MM/YYYY">
                                            {item.repair_time}
                                        </Moment>
                                    </button>
                                    <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                                        Thời gian hẹn sửa: {item.correction_time}
                                    </button>
                                </div>
                                <div className="">
                                    <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                        Liên hệ
                                    </button>
                                    <button onClick={() => handleCancelBooking(item._id)} className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                        Hủy lịch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="text-red-500 text-center mt-[50px] text-[18px]">Không tìm thấy đơn đặt lịch nào</div>
            )}
        </div>
    );
};


export default WaitForComfirmationPage;
