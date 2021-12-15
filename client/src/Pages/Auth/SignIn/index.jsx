import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import imgSignin from "../../../Images/signin-image.jpg";
import iconback from "../../../Images/iconBack.png";
import { useForm } from "react-hook-form"
import axios from 'axios'
import { API, isAuthenticated } from "../../../constant";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [redirectToRef, setRedirectToRef] = useState(false)

  const { user } = isAuthenticated()

  const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(data));
      next();
    }
  };

  const onSubmit = async (dataForm, e) => {
    try {
      const { data } = await axios.post(`${API}/login`, dataForm)

      const dataGetItem = {
        token: data.token,
        user: data.user
      }

      if (data.success) {
        setMessage(data.message)
        setError("")
        e.target.reset()
        authenticate(dataGetItem, () => {
          setRedirectToRef(true)
        })
      }
    } catch (error) {
      setError(error.response.data.message)
      setMessage("")
    }
  }

  const redirectUser = () => {
    if (redirectToRef) {
      if (user.role === 1) {
        return <Redirect to='/admin' />
      } else {
        return <Redirect to='/' />
      }
    }
  }

  return (
    <>
      {redirectUser()}
      <div className="md:bg-gray-100 h-[100vh] flex relative">
        <div className="w-[40px] absolute top-[20px] left-[50px] cursor-pointer">
          {" "}
          <Link to="/">
            <img src={iconback} alt="" className="w-full" />
          </Link>
        </div>
        <div className="w-[900px] m-auto bg-white md:shadow-xl rounded-[30px] py-[70px]  ">
          <div className=" md:grid md:grid-cols-2">
            <div className="hidden md:block md:pl-[30px] lg:pl-[110px] pr-[20px] mt-[10px]">
              <img src={imgSignin} alt="" />
              <Link
                to="/auth/register"
                className="block text-center mt-[60px] text-gray-700 underline hover:text-blue-700"
              >
                Tạo tài khoản?
              </Link>
            </div>
            <div className="px-[15px] sm:px-[30px] text-center md:text-left md:px-[30px] lg:pr-[90px] lg:pl-[80px]">
              {error ? <span className="text-red-600">{error}</span> : message}
              <p className="text-[#222] text-[36px] font-bold">Đăng nhập</p>
              <form action="" className="mt-[45px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[30px]">
                  <div className="relative">
                    <label htmlFor="" className="absolute bottom-[5px]">
                      <i class="fas fa-user text-[14px]"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                      placeholder="Email"
                      {...register('email', { required: true })}
                    />
                  </div>
                  {errors?.email?.type === "required" && <p className="text-red-600">Email không đc để trống</p>}
                  {errors?.email?.type === "pattern" && (<p className="text-red-600">Email chưa đúng định dạng</p>)}
                </div>
                <div className="mb-[30px]">
                  <div className="relative">
                    <label htmlFor="" className="absolute bottom-[5px]">
                      <i class="fas fa-lock text-[14px]"></i>
                    </label>
                    <input
                      type="password"
                      className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                      placeholder="Mật khẩu"
                      name="password"
                      {...register('password', { required: true })}
                    />
                  </div>
                  {errors?.password?.type === "required" && <p className="text-red-600">Mật khẩu không đc để trống</p>}
                  {errors?.password?.type === "minLength" && (<p className="text-red-600">Mật khẩu ít nhất 6 kí tự</p>)}
                </div>
                <div className="mb-[40px]">
                  <label htmlFor="" className="flex items-center space-x-3">
                    <Link to="/auth/forgorpw" className="text-gray-900 text-[14px]">
                      Quên mật khẩu?
                    </Link>
                  </label>
                </div>
                <button className="bg-[#6dabe4]  px-[39px] py-[15px] border-none rounded-[5px] text-[14px] text-white">
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
