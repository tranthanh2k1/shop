import React from "react";
import { Link } from "react-router-dom";
import post_06 from "../../../Images/post-06.jpg";
import test_bg from "../../../Images/test_bg.png";
import phone_icon from "../../../Images/phone_icon.png";
const BlogDetail = () => {
  return (
    <>
      <div className="mt-[80px]">
        <div className="container mx-auto grid grid-cols-[2fr,1fr] gap-[30px]">
          <div className="w-full">
            <div className="mb-[50px] w-full">
              <div className="w-full ">
                <img src={post_06} alt="" className="max-w-full" />
              </div>
              <div className="py-[30px] w-full border-t-[8px] border-[#039ee3] ">
                <p className="leading-[24px] text-[18px] text-[#000] font-medium">
                  Blogpost With Image
                </p>
                <div className="text-[#000] text-[13px] mb-[5px] w-full">
                  <ul className="list-none flex items-center mt-[10px]">
                    <li className=" text-[14px] text-[#039ee3] mr-[15px]">
                      <i className="fas fa-user mr-[5px]"></i>
                      Marketing
                    </li>
                    <li className=" text-[14px] text-[#039ee3] mr-[15px]">
                      <i className="fas fa-comment mr-[5px]"></i>5
                    </li>
                    <li className="text-[14px] text-[#039ee3] mr-[15px]">
                      <i className="fas fa-calendar mr-[5px]"></i>
                      12 Aug 2017
                    </li>
                  </ul>
                </div>
                <p className="mt-[15px] text-[15px] text-[#707070]">
                  Consectetur, assumenda provident lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quae laboriosam sunt hic
                  perspiciatis, asperiores mollitia excepturi voluptatibus sequi
                  nostrum ipsam veniam omnis nihil! A ea maiores corporis. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-end mt-[30px]">
                  <div className="flex items-center">
                    <p className="font-medium text-gray-500 mr-[15px]">
                      {" "}
                      Share:
                    </p>
                    <div className="flex items-center">
                      <span className="hover:text-[#039ee3] text-[12px] cursor-pointer text-[#000] mr-[10px]">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                      <span className="hover:text-[#039ee3] text-[14px] cursor-pointer text-[#000] mr-[10px]">
                        <i class="fab fa-twitter"></i>
                      </span>
                      <span className="hover:text-[#039ee3] text-[14px] cursor-pointer text-[#000] ">
                        <i class="fab fa-google-plus-g"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px] w-full flex justify-between pb-[25px] border-dotted border-b-2 border-[#039ee3]">
                  <div className="p-0">
                    <div className="w-full">
                      <div className="w-[150px] ">
                        <Link to="" className="text-[14px]">
                          <img src={post_06} alt="" className="max-w-full" />
                        </Link>
                        <span className="w-full mt-[15px] inline-block text-[14px] font-medium">
                          <i className="fas fa-angle-left mr-[5px]"></i>
                          Previous
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-0">
                    <div className="w-full">
                      <div className="w-[150px] ">
                        <Link to="" className="text-[14px]">
                          <img src={post_06} alt="" className="max-w-full" />
                        </Link>
                        <div className="flex items-center justify-end">
                          <span className=" mt-[15px]  text-[14px] font-medium">
                            Next
                            <i className="fas fa-angle-right ml-[5px]"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-[50px] w-full">
              <p className="text-[18px] font-medium text-[#000] leading-[21px]  mb-[20px]">
                SEARCH
              </p>
              <div className="pt-[10px]">
                <div className="bg-[#f8f8f8] h-[45px] rounded-[50px] flex w-full relative  ">
                  <input
                    type="text"
                    className="bg-transparent w-full px-[20px] py-[15px] text-[14px] h-auto focus:outline-none"
                    placeholder="Search"
                  />
                  <span className="bg-transparent px-[20px] py-[10px]">
                    <button className="bg-transparent text-[15px] text-[#000] relative t-[5px] mt-[2px] ">
                      <i className="fas fa-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-[50px] w-full ">
              <p className="text-[18px] font-medium text-[#000] leading-[21px]  mb-[20px]">
                ABOUT AUTHOR
              </p>
              <p className="text-[#707070] text-[15px] leading-[21px] mb-[1rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do
                eiusmod tempor.
              </p>
              <p className="text-[#707070] text-[15px] leading-[21px] mb-[1rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="mb-[50px] w-full">
              <p className="text-[18px] font-medium text-[#000] leading-[21px]  mb-[20px]">
                RECENT POST
              </p>
              <div className="p-0">
                <ul className="list-none">
                  <li className="mb-[20px]">
                    <p className="font-medium text-[15px] leading-[21px] text-[#2c2c2c]">
                      How To Look Up
                    </p>
                    <p className="mt-[5px] text-[12px] text-gray-500">
                      <i className="fas fa-calendar mr-[7px]"></i>
                      Aug 20, 2017
                    </p>
                  </li>
                  <li className="mb-[20px]">
                    <p className="font-medium text-[15px] leading-[21px] text-[#2c2c2c]">
                      Compatible Inkjet Cartridge
                    </p>
                    <p className="mt-[5px] text-[12px] text-gray-500">
                      <i className="fas fa-calendar mr-[7px]"></i>
                      Aug 20, 2017
                    </p>
                  </li>
                  <li className="mb-[20px]">
                    <p className="font-medium text-[15px] leading-[21px] text-[#2c2c2c]">
                      Treat That Oral Thrush Now
                    </p>
                    <p className="mt-[5px] text-[12px] text-gray-500">
                      <i className="fas fa-calendar mr-[7px]"></i>
                      Aug 20, 2017
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-[50px] w-full">
              <p className="text-[18px] font-medium text-[#000] leading-[21px]  mb-[20px]">
                CATEGORIES
              </p>
              <div className="text-[15px] ">
                <ul className="list-none">
                  <li
                    className="mb-[3px] bg-[#f6f6f6] px-[20px] py-[10px] font-medium text-[15px] text-[#000] hover:bg-[#039ee3]  hover:text-white hover:pl-[30px]"
                    style={{ transition: "0.5s" }}
                  >
                    <Link to="" className=" text-[14px]">
                      <i className="mr-[3px] fas fa-caret-right"></i>
                      Change Oil and Filter
                    </Link>
                  </li>
                  <li
                    className="mb-[3px] bg-[#f6f6f6] px-[20px] py-[10px] font-medium text-[15px] text-[#000] hover:bg-[#039ee3]  hover:text-white hover:pl-[30px]"
                    style={{ transition: "0.5s" }}
                  >
                    <Link to="" className=" text-[14px]">
                      <i className="mr-[3px] fas fa-caret-right"></i>
                      Change Oil and Filter
                    </Link>
                  </li>
                  <li
                    className="mb-[3px] bg-[#f6f6f6] px-[20px] py-[10px] font-medium text-[15px] text-[#000] hover:bg-[#039ee3]  hover:text-white hover:pl-[30px]"
                    style={{ transition: "0.5s" }}
                  >
                    <Link to="" className=" text-[14px]">
                      <i className="mr-[3px] fas fa-caret-right"></i>
                      Change Oil and Filter
                    </Link>
                  </li>
                  <li
                    className="mb-[3px] bg-[#f6f6f6] px-[20px] py-[10px] font-medium text-[15px] text-[#000] hover:bg-[#039ee3]  hover:text-white hover:pl-[30px]"
                    style={{ transition: "0.5s" }}
                  >
                    <Link to="" className=" text-[14px]">
                      <i className="mr-[3px] fas fa-caret-right"></i>
                      Change Oil and Filter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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

export default BlogDetail;
