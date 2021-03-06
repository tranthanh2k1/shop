import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { API, convertStatusString, isAuthenticated } from "../../../constant";

// const { detailBooking } = useSelector(state => state.bookingAdmin)


const ListBookedFixingUser = () => {
    const [listAllBookingUser, setListAllBookingUser] = useState([]);

    const { token } = isAuthenticated();

    const hoverRef = useRef(null)

    useEffect(() => {
        const getListBookingUser = async () => {
            const { data } = await axios.get(`${API}/booking/user/status`, {
                params: {
                    status: "Fixing",
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
                        <div className="container mx-auto mb-12 grid sm:grid-cols-[66%,34%] pt-[15px]">
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
                                {item.intend_time && (
                                    <p className="text-gray-600 pt-[5px]">
                                        Th???i gian h???n ho??n th??nh: {item.intend_time}
                                    </p>
                                )}

                            </div>
                            <div>
                                <p className="text-gray-600 pt-[5px]">
                                    C???a h??ng m?? t??? l???i th???c: {item.exact_error}
                                </p>
                                <p className="text-gray-600 pt-[5px]">
                                    ???nh l???i c???a m??y:
                                </p>
                                <img
                                    src={item.image_desc_error} alt="" className='w-[50px] h-[auto] hoverimage'
                                />
                            </div>
                        </div>
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
                                    <button className="text-gray-700 border border-gray-700 mx-[7px] bg-white rounded-[5px] px-[10px] py-[6px] ">
                                        Li??n h???
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                    {detailBooking.status === 'Fixing' && (
                <>
                  {detailBooking.image_desc_error && (
                    <>
                      <p className="text-gray-600 pt-[5px]">
                        ???nh l???i c???a m??y:
                      </p>
                      <img src={detailBooking.image_desc_error} alt="" className='w-[150px] h-[auto]' />
                    </>
                  )}
                  <p className="text-gray-600 pt-[5px]">
                    M?? t??? ch??nh x??c l???i c???a m??y: {detailBooking.exact_error}
                  </p>
                </>
              )}
                    </div> */}
                </div>
            )) : (<div className="text-red-500 text-center mt-[50px] text-[18px]">Kh??ng t??m th???y ????n ?????t l???ch n??o</div>)}
        </div>
    );
};

export default ListBookedFixingUser
