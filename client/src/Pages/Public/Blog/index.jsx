import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../constant";

const BlogPage = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${API}/blog/list`)

                setBlog(data.slice(0, 3))
            } catch (error) {
                console.log("error", error.response)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="mt-[80px]">
                <div className="container mx-auto grid grid-cols-[2fr,1fr] gap-[30px] pb-[50px]">
                    <div className="w-full">
                        {blog && blog.map(item => (
                            <div className="mb-[50px] w-full">
                                <div className="w-full">
                                    <img src={item.image_blog} alt="" className="max-w-full" />
                                </div>
                                <div className="py-[30px] w-full border-t-[8px] border-[#039ee3] ">
                                    <p className="leading-[24px] text-[18px] text-[#000] font-medium">
                                        {item.title}
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
                                        {item.desc_blog}
                                    </p>
                                    <div className="flex justify-between mt-[30px]">
                                        <div className="">
                                            <Link
                                                to=""
                                                className="cursor-pointer text-white bg-[#039ee3] hover:text-white hover:bg-[#000] text-[14px] font-medium px-[30px] py-[13px] uppercase"
                                            >
                                                Read More
                                                <i className="fas fa-angle-right ml-[5px]"></i>
                                            </Link>
                                        </div>
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
                                </div>
                            </div>
                        ))}
                        <div className="w-full flex justify-center">
                            <ul className="flex pl-0 list-none">
                                <li className="inline mx-[4px]">
                                    <Link
                                        to=""
                                        className="relative px-[14px] py-[6px] ml-0 text-[#000] bg-white border border-[#e1e1e1] w-[40px] h-[40px] text-center leading-[28px] hover:bg-gray-100"
                                        style={{ transition: "0.3s" }}
                                    >
                                        <i className="fal fa-angle-left"></i>
                                    </Link>
                                </li>
                                <li className="inline mx-[4px]">
                                    <Link
                                        to=""
                                        className="active relative px-[14px]  py-[6px] ml-0 text-[#000] bg-white border border-[#e1e1e1] w-[40px] h-[40px] text-center leading-[28px] "
                                        style={{ transition: "0.3s" }}
                                    >
                                        1
                                    </Link>
                                </li>
                                <li className="inline mx-[4px]">
                                    <Link
                                        to=""
                                        className="relative px-[14px]  py-[6px] ml-0 text-[#000] bg-white border border-[#e1e1e1] w-[40px] h-[40px] text-center leading-[28px] hover:bg-gray-100"
                                        style={{ transition: "0.3s" }}
                                    >
                                        2
                                    </Link>
                                </li>
                                <li className="inline mx-[4px]">
                                    <Link
                                        to=""
                                        className="relative px-[14px]  py-[6px] ml-0 text-[#000] bg-white border border-[#e1e1e1] w-[40px] h-[40px] text-center leading-[28px] hover:bg-gray-100"
                                        style={{ transition: "0.3s" }}
                                    >
                                        3
                                    </Link>
                                </li>
                                <li className="inline mx-[4px]">
                                    <Link
                                        to=""
                                        className="relative px-[14px] py-[6px] ml-0 text-[#000] bg-white border border-[#e1e1e1] w-[40px] h-[40px] text-center leading-[28px] hover:bg-gray-100"
                                        style={{ transition: "0.3s" }}
                                    >
                                        <i className="fal fa-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
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
        </>
    );
};

export default BlogPage;