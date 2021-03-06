import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from 'react-moment'
import { API, convertStatusString, isAuthenticated } from "../../../constant";
import { useForm } from "react-hook-form";

const ConfirmBookingUser = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bookingId, setBookingId] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [listAllBookingUser, setListAllBookingUser] = useState([]);

    const { token } = isAuthenticated();

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.get(`${API}/booking/user/status`, {
                params: {
                    status: "Confirm",
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

    const handleCancelBox = () => {
        setIsModalVisible(false);
    };

    const onSubmit = async (dataForm) => {
        setIsModalVisible(false)
        try {
            const { data } = await axios.put(`${API}/booking/user/contact/${bookingId}`, dataForm)

            if (data) {
                alert(data.message)
            }
        } catch (error) {
            console.log("error", error.response)
        }
    }

    return (
        <div>
            {listAllBookingUser.length > 0 ? listAllBookingUser.map((item) => (
                <>
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
                                    M?? h??a ????n: #{item.code_bill}
                                </p>
                                <p className="text-gray-600 pb-[5px]">
                                    H??? t??n: {item.name}
                                </p>
                                <p className="text-gray-600 py-[5px]">S??? ??T: {item.phone}</p>
                                {/* <p className="text-gray-600 py-[5px]">
                                    ?????a ch???: {item.address}
                                </p> */}
                                <p className="text-gray-600 pt-[5px]">
                                    Kh??ch h??ng m?? t??? l???i: {item.description_error}
                                </p>
                                <p className="text-gray-600 pt-[5px]">
                                    D???ch v???: {item?.service_id?.name || 'kh??ng t??m th???y d???ch v???'}
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
                                    <button
                                        onClick={() => setIsModalVisible(true)}
                                        className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                        Li??n h???
                                    </button>
                                </div>
                            </div> */}
                            <div className=" pb-[20px]">
                                <div className="text-[14px] flex justify-between">
                                    <div className="">
                                        <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                                            Ng??y h???n s???a:
                                            <Moment format=" DD/MM/YYYY">
                                                {item.repair_time}
                                            </Moment>
                                        </button>
                                        <button className="text-white mx-[7px] bg-red-500 rounded-[5px] px-[10px] py-[6px] ">
                                            Th???i gian h???n s???a: {item.correction_time}
                                        </button>
                                    </div>
                                    <div className="">
                                        <button
                                            onClick={() => {
                                                setBookingId(item._id)
                                                setIsModalVisible(true)
                                            }}
                                            className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                            Li??n h???
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            isModalVisible
                                ? "fixed z-[99999] inset-0 bg-black bg-opacity-10"
                                : "hidden"
                        }
                    >
                        <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[50vw]">
                            <div
                                action=""
                                class="w-full h-full relative bg-white rounded px-[30px]"
                            >
                                <p className="text-[18px] font-medium pt-[15px] text-gray-700">
                                    Li??n h???:
                                </p>
                                <div className="mt-[15px]">
                                    <p className="text-[14px] mb-[5px]">
                                        M?? ????n h??ng: <span className="text-red-500">#{item.code_bill}</span>
                                    </p>
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="grid grid-cols-2 gap-[15px]">
                                        </div>
                                        <div className="my-[15px]">
                                        </div>
                                        <textarea
                                            name=""
                                            id=""
                                            rows="4"
                                            placeholder="N???i dung li??n h???"
                                            className="text-[14px] border border-gray-300 w-full px-[15px] py-[5px] focus:outline-none focus:border-blue-300"
                                            {...register('contact_user')}
                                        />
                                        <div className=" pb-[15px] flex justify-end">
                                            <button
                                                type="submit"
                                                className=" border border-blue-400 mr-[10px] text-white text-[14px] bg-blue-400 hover:bg-blue-600 rounded-[3px] px-[15px] py-[3px]">
                                                G???i
                                            </button>
                                            <button
                                                onClick={() => handleCancelBox()}
                                                className=" border border-gray-400 text-gray-500 text-[14px] hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[15px] py-[3px]"
                                            >
                                                ????ng
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )) : (
                <div className="text-red-500 text-center mt-[50px] text-[18px]">Kh??ng t??m th???y ????n ?????t l???ch n??o</div>
            )}

        </div>
    );
};

export default ConfirmBookingUser;
