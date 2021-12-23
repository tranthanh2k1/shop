import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { listServiceAction } from '../../../redux/actions/services'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { API } from '../../../constant'
import Swal from 'sweetalert2'

const MakeAppointmentAdmin = () => {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [startDate, setStartDate] = useState(new Date());

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { listService } = useSelector(state => state.service)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(listServiceAction())
    }, [])

    const onSubmit = async (dataForm) => {
        try {
            const { data } = await axios.post(`${API}/booking`, dataForm)

            if (data.success) {
                setError("")
                setMessage(data.message)
                // alert(data.message)
                Swal.fire(
                    `${data.message}`,
                    'You clicked the button!',
                    'success'
                )

                // history.push('/admin/booking/list')
            }
        } catch (error) {
            setError(error.response.data.message)
            alert(error.response.data.message)
        }
    }

    return (
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
            <div className="mb-1 w-full ">
                <div className="m-0">
                    <div className="">
                        {/* {error ? error : message} */}
                        <p className="text-center text-[30px] md:text-[35px] leading-[36px] font-medium relative before:content-[''] before:absolute before:w-[100px] before:h-[5px] before:bg-blue-400 before:top-[60px] before:left-[50%] before:translate-x-[-50%]">
                            Tạo lịch hẹn
                        </p>

                        <form action="" className="w-full px-[15px] md:px-[30px] lg:max-w-[55%] lg:mx-auto mt-[90px]" onSubmit={handleSubmit(onSubmit)} >

                            <div className="grid grid-cols-2 gap-[10px]">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        // defaultValue={user && user.username}
                                        className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                        placeholder=" Họ và tên"
                                        {...register('name', {
                                            required: true,
                                            isLength: ({ min: 6, max: 30 })
                                        })}
                                    />
                                    {errors?.name?.type === "required" && <p className="text-red-600">Họ tên không được để trống</p>}
                                    {errors?.name?.type === "isLength" && <p className="text-red-600">Họ tên phải dài từ 3 đến 30 kí tự</p>}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="phone"
                                        // defaultValue={user && user.phone}
                                        className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                        placeholder="Số điện thoại"
                                        {...register('phone', {
                                            required: true,
                                            pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g
                                        })}
                                    />
                                    {errors?.phone?.type === "required" && <p className="text-red-600">Số điện thoại không được để trống</p>}
                                    {errors?.phone?.type === "pattern" && (<p className="text-red-600">Số điện thoại chưa đúng định dạng</p>)}
                                </div>
                            </div>

                            <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
                                <div>
                                    <input
                                        type="text"
                                        name="email"
                                        // defaultValue={user && user.email}
                                        className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                        placeholder=" Email"
                                        {...register('email', {
                                            required: true,
                                            pattern: /^([\w]*[\w\.]*(?!\.)@gmail.com)/
                                        })}
                                    />
                                    {errors?.email?.type === "required" && <p className="text-red-600">Email không được để trống</p>}
                                    {errors?.email?.type === "pattern" && (<p className="text-red-600">Email chưa đúng định dạng</p>)}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="address"
                                        value="Cơ sở: Nam Từ Liêm - Hà Nội"
                                        disabled
                                        className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                    />
                                    {errors?.address?.type === "required" && <p className="text-red-600">Địa chỉ không được để trống</p>}
                                </div>
                            </div>

                            <div className="mt-[10px] ">
                                <select
                                    name="service_id"
                                    id="service_id"
                                    className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                    {...register("service_id")}
                                >
                                    <option value="" className="text-gray-400"> Chọn dịch vụ</option>
                                    {listService && listService.map(item => (
                                        <>
                                            <option key={item._id} value={item._id}>{item.name}</option>
                                        </>
                                    ))}
                                </select>
                                {errors?.service_id?.type === "required" && <p className="text-red-600">Bạn chưa chọn dịch vụ</p>}
                            </div>

                            <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
                                <div>
                                    <label htmlFor="">Ngày sửa</label>
                                    <input
                                        name="repair_time"
                                        type="date"
                                        className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                        {...register('repair_time', {
                                            required: true
                                        })}
                                    />
                                    {errors?.repair_time?.type === "required" && <p className="text-red-600">Ngày sửa không được để trống</p>}
                                </div>
                                <div>
                                    <label htmlFor="">Ca sửa:</label>
                                    <input
                                        name="correction_time"
                                        type="time"
                                        className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8]  focus:outline-none focus:border focus:border-gray-600"
                                        min={startDate}
                                        // max="18:00"
                                        {...register('correction_time', {
                                            required: true,
                                        })}
                                    />
                                    {errors?.correction_time?.type === "required" && <p className="text-red-600">Ca sửa không được để trống</p>}
                                </div>
                            </div>

                            <div className="mt-[10px]">
                                <textarea
                                    name="description_error"
                                    type="text"
                                    className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                                    placeholder="Mô tả lỗi"
                                    {...register('description_error', {
                                        required: true,
                                    })}
                                />
                                {errors?.description_error?.type === "required" && <p className="text-red-600">Mô tả lỗi không được để trống</p>}
                            </div>

                            <div className="text-center mt-[25px]">
                                <button type="submit" className="bg-[#17a5e9] text-white border-none height-[50px] min-w-[170px] text-[14px] hover:bg-[#25d8ed] rounded-[100px] py-[15px] text-center font-bold">
                                    ĐĂT LỊCH
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAppointmentAdmin
