import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import inner_page_banner from "../../../Images/inner_page_banner.jpg";
import post_1 from "../../../Images/post-01.jpg";
import team_member_1 from "../../../Images/team-member-1.jpg";
import test_bg from "../../../Images/test_bg.png";
import phone_icon from "../../../Images/phone_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { listServiceAction } from "../../../redux/actions/services";

const ServicesList = () => {
  const { listService } = useSelector(state => state.service)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listServiceAction())
  }, [])

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
            Danh sách dịch cụ
          </p>
          <div className="flex">
            <Link to="/" className="text-[#039ee3]">
              Trang chủ
            </Link>
            <span className="text-white ml-[5px]"> / Danh sách dịch vụ</span>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[70px]">
          {listService.map(item => (
            <div key={item._id} className="m-0">
              <div className="w-full">
                <img src={item.image} alt="" className="w-full w-[300px] h-[250px]" />
              </div>
              <div className="mt-[30px]">
                <p className="text-[24px] tetx-[#000] font-medium mb-[15px]">
                  {item.name}
                </p>
                <p className="text-[#707070] text-[15px] leading-[21px]">
                  {item.description || 'Mô tả lỗi'}
                </p>
                <div className="mt-[30px]">
                  <Link
                    to=""
                    className=" bg-[#039ee3] hover:bg-[#252525] text-white px-[30px] py-[15px] uppercase text-[14px] font-medium  text-white "
                  >
                    {" "}
                    Chi tiết dịch vụ
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f8f8f8] mt-[170px] py-[100px]">
        <div className="container mx-auto">
          <div className=" text-left ">
            <p className="text-[30px] sm:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
              EXPERIENCED STAFF
            </p>
            <p className=" text-[18px] sm:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[70px] sm:before:top-[50px] before:left-0 ">
              Our experts have been featured in press numerous times.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[40px] mt-[70px]">
            <div className=" text-center p-0 bg-[#eee] hover:text-white border border-[#eee] hover:bg-[#17a5e9] hover:border-[#17a5e9]">
              <div className="w-full ">
                <img src={team_member_1} alt="" className="w-full" />
              </div>
              <p className="text-[18px] leading-[21px] font-medium mt-[30px] ">
                Dean Michael
              </p>
              <div className="mt-[10px] pb-[20px]">
                <Link
                  to=""
                  className="fab fa-facebook-f text-[14px] mx-[7px]"
                ></Link>
                <Link to="" className="fab fa-google-plus-g mx-[7px]"></Link>
                <Link to="" className="fab fa-twitter mx-[7px]"></Link>
                <Link to="" className="fab fa-instagram mx-[7px]"></Link>
              </div>
            </div>
            <div className=" text-center p-0 bg-[#eee] hover:text-white border border-[#eee] hover:bg-[#17a5e9] hover:border-[#17a5e9]">
              <div className="w-full ">
                <img src={team_member_1} alt="" className="w-full" />
              </div>
              <p className="text-[18px] leading-[21px] font-medium mt-[30px] ">
                Dean Michael
              </p>
              <div className="mt-[10px] pb-[20px]">
                <Link
                  to=""
                  className="fab fa-facebook-f text-[14px] mx-[7px]"
                ></Link>
                <Link to="" className="fab fa-google-plus-g mx-[7px]"></Link>
                <Link to="" className="fab fa-twitter mx-[7px]"></Link>
                <Link to="" className="fab fa-instagram mx-[7px]"></Link>
              </div>
            </div>
            <div className=" text-center p-0 bg-[#eee] hover:text-white border border-[#eee] hover:bg-[#17a5e9] hover:border-[#17a5e9]">
              <div className="w-full ">
                <img src={team_member_1} alt="" className="w-full" />
              </div>
              <p className="text-[18px] leading-[21px] font-medium mt-[30px] ">
                Dean Michael
              </p>
              <div className="mt-[10px] pb-[20px]">
                <Link
                  to=""
                  className="fab fa-facebook-f text-[14px] mx-[7px]"
                ></Link>
                <Link to="" className="fab fa-google-plus-g mx-[7px]"></Link>
                <Link to="" className="fab fa-twitter mx-[7px]"></Link>
                <Link to="" className="fab fa-instagram mx-[7px]"></Link>
              </div>
            </div>
            <div className=" text-center p-0 bg-[#eee] hover:text-white border border-[#eee] hover:bg-[#17a5e9] hover:border-[#17a5e9]">
              <div className="w-full ">
                <img src={team_member_1} alt="" className="w-full" />
              </div>
              <p className="text-[18px] leading-[21px] font-medium mt-[30px] ">
                Dean Michael
              </p>
              <div className="mt-[10px] pb-[20px]">
                <Link
                  to=""
                  className="fab fa-facebook-f text-[14px] mx-[7px]"
                ></Link>
                <Link to="" className="fab fa-google-plus-g mx-[7px]"></Link>
                <Link to="" className="fab fa-twitter mx-[7px]"></Link>
                <Link to="" className="fab fa-instagram mx-[7px]"></Link>
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

export default ServicesList;
