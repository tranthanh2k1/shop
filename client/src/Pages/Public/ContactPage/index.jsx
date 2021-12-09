import React from "react";
import { Link } from "react-router-dom";
import inner_page_banner from "../../../Images/inner_page_banner.jpg";
import test_bg from "../../../Images/test_bg.png";
import phone_icon from "../../../Images/phone_icon.png";
const ContactPage = () => {
  return (
    <>
      <div
        className="py-[20px] md:py-[30px] lg:h-[245px] bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${inner_page_banner})`,
          backgroundSize: "100%",
        }}
      >
        <div className="container mx-auto">
          <p className="hidden md:block text-white text-[40px] mb-[15px] leading-[45px] font-bold">
            Contact
          </p>
          <div className="flex">
            <Link to="/" className="text-[#039ee3]">
              Home
            </Link>
            <span className="text-white ml-[5px]"> / Contact</span>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <p className="text-center text-[30px] md:text-[35px] leading-[36px] font-medium relative before:content-[''] before:absolute before:w-[100px] before:h-[5px] before:bg-blue-400 before:top-[60px] before:left-[50%] before:translate-x-[-50%]">
          GET IN TOUCH
        </p>
        <div className="mx-[15px] md:mx-[30px] lg:max-w-[55%] lg:mx-auto  mt-[100px] py-[50px] border-t border-b border-[#e1e1e1]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            <div className="text-center">
              <span className="text-[#039ee3] text-[30px]">
                <i className="fas fa-road"></i>
              </span>
              <p className="text-[16px] font-medium text-[#000]">
                Lorem Ipsum is simply dummy text..
              </p>
              <p className="text-[#737373] text-[15px]">Melbourne Australia</p>
            </div>
            <div className="text-center">
              <span className="text-[#039ee3] text-[30px]">
                <i className="fas fa-user"></i>
              </span>
              <p className="text-[16px] font-medium text-[#000]">
                0011 234 56789
              </p>
              <p className="text-[#737373] text-[15px]">
                Mon-Fri 8:30am-6:30pm
              </p>
            </div>
            <div className="text-center">
              <span className="text-[#039ee3] text-[30px]">
                <i className="fas fa-envelope"></i>
              </span>
              <p className="text-[16px] font-medium text-[#000]">
                Example@gmail.com
              </p>
              <p className="text-[#737373] text-[15px]">24/7 online support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[15px] md:mx-[30px] lg:max-w-[55%] lg:mx-auto mt-[90px] ">
        <p className="text-center text-[30px] md:text-[35px] leading-[36px] font-medium ">
          SEND MESSAGER
        </p>
        <div className="grid grid-cols-2 gap-[10px] mt-[30px]">
          <input
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder=" Họ và tên"
          />
          <input
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder="Phone number"
          />
        </div>
        <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
          <input
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder=" Email"
          />
          <input
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder="Địa chỉ"
          />
        </div>
        <div className="mt-[10px] ">
          <textarea
            rows="5"
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder="Mô tả lỗi"
          />
        </div>
        <div className="text-center mt-[25px]">
          <button className="bg-[#17a5e9] text-white border-none height-[50px] min-w-[170px] text-[14px] hover:bg-[#25d8ed] rounded-[100px] py-[15px] text-center font-bold">
            SUBMIT NOW
          </button>
        </div>
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
    </>
  );
};

export default ContactPage;
