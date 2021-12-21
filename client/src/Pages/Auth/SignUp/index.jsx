import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import imgSignup from "../../../Images/signup-image.jpg";
import iconback from "../../../Images/iconBack.png";
import { useForm } from "react-hook-form"
import axios from 'axios'
import { API } from "../../../constant";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const history = useHistory()

  const onSubmit = async (dataForm, e) => {
    try {
      const { data } = await axios.post(`${API}/register`, dataForm)

      setMessage(data.message)
      setError("")

      if (data.success) {
        alert("Bạn đăng ký tài khoản thành công! Vui lòng đăng nhập để truy cập hệ thống")
        history.push('/auth/login')
      }
      e.target.reset()
    } catch (error) {
      setError(error.response.data.message)
      setMessage("")
    }
  }

  return (
    <>
      <div className="bg-white md:bg-gray-100 h-[100vh] flex relative">
        <div className="w-[40px] absolute top-[20px] left-[50px] cursor-pointer">
          {" "}
          <Link to='/'>
            <img src={iconback} alt="" className="w-full" />
          </Link>
        </div>
        <div className="w-[900px] m-auto bg-white md:shadow-xl rounded-[30px] py-[70px]  ">
          <div className="md:grid grid-cols-2">
            <div className="px-[15px] sm:px-[30px] text-center md:text-left lg:pr-[90px] lg:pl-[100px]">
              {error ? <span className="text-red-600">{error}</span> : message}
              <p className="text-[#222] text-[36px] font-bold">Đăng ký</p>
              <form action="" className="mt-[45px]" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-[25px]">
                  <div className="relative">
                    <label htmlFor="" className="absolute bottom-[5px]">
                      <i class="fas fa-user text-[14px]"></i>
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                      placeholder="Họ và tên"
                      {...register('username', {
                        required: true,
                      })}
                    />
                  </div>
                  {errors?.username?.type === "required" && <p className="text-red-600">Username không được để trống</p>}
                </div>

                <div className="mb-[25px]">
                  <div className="relative">
                    <label htmlFor="" className="absolute bottom-[5px]">
                      <i class="fas fa-phone text-[14px]"></i>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                      placeholder="Số điện thoại"
                      {...register('phone', {
                        required: true,
                        pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g
                      })}
                    />
                  </div>
                  {errors?.phone?.type === "required" && <p className="text-red-600">Phone không được để trống</p>}
                  {errors?.phone?.type === "pattern" && (<p className="text-red-600">Phone chưa đúng định dạng</p>)}
                </div>

                <div className="mb-[25px]">
                  <div className="relative">
                    <label htmlFor="" className="absolute bottom-[5px]">
                      <i class="fas fa-envelope text-[14px]"></i>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                      placeholder="Email"
                      {...register('email', {
                        required: true,
                        pattern: /^([\w]*[\w\.]*(?!\.)@gmail.com)/
                      })}
                    />
                  </div>
                  {errors?.email?.type === "required" && <p className="form__error text-red-600">Email không đc để trống</p>}
                  {errors?.email?.type === "pattern" && (<p className="form__error text-red-600">Email chưa đúng định dạng</p>)}
                </div>

                <div className="mb-[25px]">
                  <div className="relative">
                    <label htmlFor="" className="absolute bottom-[5px]">
                      <i class="fal fa-lock-alt text-[14px]"></i>
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                      placeholder="Mật khẩu"
                      {...register('password', {
                        required: true,
                        minLength: 6
                      })}
                    />
                  </div>
                  {errors?.password?.type === "required" && <p className="form__error text-red-600">Mật khẩu không đc để trống</p>}
                  {errors?.password?.type === "minLength" && (<p className="form__error text-red-600">Mật khẩu ít nhất 6 kí tự</p>)}
                </div>

                <button type="submit" className="bg-[#6dabe4] px-[39px] mt-[20px] py-[15px] border-none rounded-[5px] text-[14px] text-white">
                  Đăng ký
                </button>
              </form>
            </div>
            <div className="hidden md:block pl-[30px] pr-[30px] lg:pl-[45px] lg:pr-[20px] mt-[10px]">
              <img src={imgSignup} alt="" />

              <Link
                to="/auth/login"
                className="block text-center mt-[40px] text-gray-700 hover:text-blue-700"
              >
                Bạn đã có tài khoản?
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  </>
  );
};

export default SignUp;
