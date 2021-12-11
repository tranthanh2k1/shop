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
                to=""
                className="block text-center mt-[60px] text-gray-700 underline hover:text-blue-700"
              >
                Create an account
              </Link>
            </div>
            <div className="px-[15px] sm:px-[30px] text-center md:text-left md:px-[30px] lg:pr-[90px] lg:pl-[80px]">
              {error ? error : message}
              <p className="text-[#222] text-[36px] font-bold">Sign In</p>
              <form action="" className="mt-[45px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-[30px]">
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
                <div className="relative mb-[30px]">
                  <label htmlFor="" className="absolute bottom-[5px]">
                    <i class="fas fa-lock text-[14px]"></i>
                  </label>
                  <input
                    type="password"
                    className="w-full outline-none border-b border-gray-400 pl-[30px] py-[6px] text-[14px]"
                    placeholder="Your Password"
                    name="password"
                    {...register('password', { required: true })}
                  />
                </div>
                <div className="mb-[40px]">
                  <label htmlFor="" className="flex items-center space-x-3">
                    <input type="checkbox" />
                    <span className="text-gray-900 text-[14px]">
                      Remember me
                    </span>
                  </label>
                </div>
                <button className="bg-[#6dabe4]  px-[39px] py-[15px] border-none rounded-[5px] text-[14px] text-white">
                  Log In
                </button>

                <Link
                  to=""
                  className="block md:hidden text-center mt-[30px] text-gray-700 underline hover:text-blue-700"
                >
                  Create an account
                </Link>

                <div className="flex items-center mt-[30px] md:mt-[70px] justify-center">
                  <span className="text-[14px] text-gray-700 mr-[30px]">
                    Or login with
                  </span>
                  <span className="text-[#3b5998] text-[30px] mx-[5px] cursor-pointer">
                    <i class="fab fa-facebook-square"></i>
                  </span>
                  <span className="text-[#1da0f2] text-[30px] mx-[5px] cursor-pointer">
                    <i class="fab fa-twitter-square"></i>
                  </span>
                  <span className="text-[#e72734] text-[30px] mx-[5px] cursor-pointer">
                    <i class="fab fa-google-plus-square"></i>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
