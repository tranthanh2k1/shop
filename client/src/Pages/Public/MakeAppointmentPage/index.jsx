import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { listServiceAction } from "../../../redux/actions/services";
import { useForm } from 'react-hook-form';
import { API, isAuthenticated } from '../../../constant';
import { getUserLocalStorage } from '../../../redux/actions/auth';
import { Link } from "react-router-dom";
import inner_page_banner from "../../../Images/inner_page_banner.jpg";
import test_bg from "../../../Images/test_bg.png";
import phone_icon from "../../../Images/phone_icon.png";

const MakeAppointment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { listService } = useSelector(state => state.service)

  const { user } = isAuthenticated()
  console.log(user)

  const dispatch = useDispatch()

  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    dispatch(listServiceAction())
    dispatch(getUserLocalStorage())
  }, [])

  const onSubmit = async (dataForm, e) => {
    const dataBooking = {
      ...dataForm,
      user_id: user && user._id
    }

    const { data } = await axios.post(`${API}/booking`, dataBooking)

    if (data.success) {
      e.target.reset()
      setError("")
      setMessage(data.message)
      alert(data.message)
    } else {
      setError(data.message)
      alert(data.message)
    }
  }

  return (
    <>
      <div className="m-0">
        <div
          className="py-[20px] md:py-[30px] lg:h-[245px] bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage: `url(${inner_page_banner})`,
            backgroundSize: "100%",
          }}
        >
          <div className="container mx-auto">
            <p className="hidden md:block text-white text-[40px] mb-[15px] leading-[45px] font-bold">
              Make Appointment
            </p>
            <div className="flex">
              <Link to="/" className="text-[#039ee3]">
                Home
              </Link>
              <span className="text-white ml-[5px]"> / Make Appointment</span>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          {error ? error : message}
          <p className="text-center text-[30px] md:text-[35px] leading-[36px] font-medium relative before:content-[''] before:absolute before:w-[100px] before:h-[5px] before:bg-blue-400 before:top-[60px] before:left-[50%] before:translate-x-[-50%]">
            Make Appointment
          </p>

          <form action="" className="w-full px-[15px] md:px-[30px] lg:max-w-[55%] lg:mx-auto mt-[90px]" onSubmit={handleSubmit(onSubmit)} >

            <div className="grid grid-cols-2 gap-[10px]">
              <div>
                <input
                  type="text"
                  name="name"
                  className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                  placeholder=" Họ và tên"
                  {...register('name', {
                    required: true,
                    isLength: ({ min: 6, max: 30 })
                  })}
                />
                {errors?.name?.type === "required" && <p className="form__error">Name không được để trống</p>}
                {errors?.name?.type === "isLength" && <p className="form__error">Name phải dài từ 3 đến 30 kí tự</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                  placeholder="Phone number"
                  {...register('phone', {
                    required: true,
                    pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g
                  })}
                />
                {errors?.phone?.type === "required" && <p className="form__error">Phone không được để trống</p>}
                {errors?.phone?.type === "pattern" && (<p className="form__error">Phone chưa đúng định dạng</p>)}
              </div>
            </div>

            <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
              <div>
                <input
                  type="text"
                  name="email"
                  className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                  placeholder=" Email"
                  {...register('email', {
                    required: true,
                    pattern: /^([\w]*[\w\.]*(?!\.)@gmail.com)/
                  })}
                />
                {errors?.email?.type === "required" && <p className="form__error">Email không được để trống</p>}
                {errors?.email?.type === "pattern" && (<p className="form__error">Email chưa đúng định dạng</p>)}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                  placeholder="Địa chỉ"
                  {...register("address", {
                    required: true
                  })}
                />
                {errors?.address?.type === "required" && <p className="form__error">Địa chỉ không được để trống</p>}
              </div>
            </div>

            <div className="mt-[10px] ">
              <select
                name="service_id"
                id="service_id"
                className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600 text-gray-400"
                {...register("service_id", {
                  required: true
                })}
              >
                <option value="" className="text-gray-500"> Chọn dịch vụ</option>
                {listService.map(item => (
                  <>
                    <option key={item._id} value={item._id}>{item.name}</option>
                  </>
                ))}
              </select>
              {errors?.service_id?.type === "required" && <p className="form__error">Bạn chưa chọn dịch vụ</p>}
            </div>

            <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
              <div>
                <input
                  name="repair_time"
                  type="date"
                  className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                  {...register('repair_time', {
                    required: true
                  })}
                />
                {errors?.repair_time?.type === "required" && <p className="form__error">Ngày không được để trống</p>}
              </div>
              <div>
                <input
                  name="correction_time"
                  type="time"
                  className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8]  focus:outline-none focus:border focus:border-gray-600"
                  min="08:00"
                  max="18:00"
                  {...register('correction_time', {
                    required: true,
                  })}
                />
                {errors?.correction_time?.type === "required" && <p className="form__error">Giờ không được để trống</p>}
              </div>
            </div>

            <div className="mt-[10px] ">
              <textarea
                name="description_error"
                type="text"
                className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                placeholder="Mô tả lỗi"
                {...register('description_error', {
                  required: true,
                })}
              />
              {errors?.description_error?.type === "required" && <p className="form__error" > Mô tả không được để trống</p>}
            </div>

            <div className="text-center mt-[25px]">
              <button type="submit" className="bg-[#17a5e9] text-white border-none height-[50px] min-w-[170px] text-[14px] hover:bg-[#25d8ed] rounded-[100px] py-[15px] text-center font-bold">
                ĐĂT LỊCH
              </button>
            </div>

          </form>
        </div>
        <div
          className="mt-[100px] py-[130px] bg-cover bg-center bg-no-repeat relative mb-[130px]"
          style={{
            backgroundImage: `url(${test_bg})`,
            // backgroundSize: "100%",
          }}
        >
          <div className="container mx-auto">
            <div className="text-white">
              <p className="text-[35px] leading-[36px] font-medium mb-[15px]">
                What Clients Say?
              </p>
              <p className="text-[20px] mb-[10px] relative before:content-[''] before:absolute before:w-[80px] before:h-[4px] before:bg-blue-400 before:top-[45px] before:left-0">
                Here are testimonials from clients..
              </p>

              <div className="md:w-[500px] mt-[50px]">
                <p className="">
                  You guys rock! Thank you for making it painless, pleasant and
                  most of all hassle free! I wish I would have thought of it
                  first. I am really satisfied with my first laptop service.
                </p>
                <p className="text-[18px] mt-[30px]  font-medium">
                  Maria Anderson
                </p>
                <p className="">CFO, Tech NY</p>
              </div>
            </div>
          </div>
          <div className="container  absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]  bg-[#039ee3] py-[20px] px-[15px] md:px-[50px] md:flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[25px]">
                <img src={phone_icon} alt="" />
              </div>
              <div className="text-white  ml-[30px]">
                <p className="mt-[8px] mb-[5px] text-[24px] md:text-[35px] font-bold">
                  REQUEST A FREE QUOTE
                </p>
                <p className="">
                  Get answers and advice from people you want it from.
                </p>
              </div>
            </div>
            <div className="">
              <button className=" bg-[#252525] text-white text-[14px] rounded-[100px] px-[30px] py-[15px] hover:text-black hover:bg-white font-medium">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAppointment;