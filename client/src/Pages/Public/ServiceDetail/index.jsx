import React from "react";
import { Link } from "react-router-dom";
import inner_page_banner from "../../../Images/inner_page_banner.jpg";
import post_4 from "../../../Images/post-04.jpg";
import post_1 from "../../../Images/post-01.jpg";
import team_member_1 from "../../../Images/team-member-1.jpg";

const ServiceDetail = () => {

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
            Services Detail
          </p>
          <div className="flex">
            <Link to="/" className="text-[#039ee3]">
              Services Detail
            </Link>
            <span className="text-white ml-[5px]"> / Contact</span>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-[60%,40%] ">
            <div className="w-full md:pr-[70px]">
              <img src={post_4} alt="" className="w-full" />
            </div>
            <div className="mt-[40px] md:mt-0 text-left">
              <p className="mt-[8px] mb-[5px] text-[24px] font-medium uppercase relative before:content-[''] before:absolute before:w-[80px] before:h-[4px] before:bg-blue-400 before:top-[45px] before:left-0">
              Phục hồi dữ liệu
              </p>
              <div className="mt-[50px] ">
                <p className="text-[22px] font-medium text-red-500">
                  4.400.000,0₫{" "}
                  <span className="text-[16px] text-black line-through">
                    5.200.000,0₫
                  </span>
                </p>
              </div>
              <div className="mt-[30px]">
                <p className="text-[15px] text-[#707070] leading-[21px]">
                  An duo lorem altera gloriatur. No imperdiet adver sarium pro.
                  No sit sumo lorem. Mei ea eius elitr consequ unturimperdiet.An
                  duo lorem altera gloriatur. No imperdiet adver sarium pro. No
                  sit sumo lorem. Mei ea eius elitr consequ unturimperdiet.
                </p>
              </div>
              <div className="mt-[50px]">
                <button
                  to=""
                  className=" bg-[#039ee3] hover:bg-[#252525]  px-[30px] py-[15px] uppercase text-[14px] font-medium  text-white "
                >
                  {" "}
                  ĐẶT LỊCH
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-[50px]">
            <p className="mb-[5px] text-[24px] font-medium uppercase relative before:content-[''] before:absolute before:w-[80px] before:h-[4px] before:bg-blue-400 before:top-[45px] before:left-0">
              Phục hồi dữ liệu
            </p>
            <p className=" mt-[30px] text-[15px] text-[#707070] leading-[23px]">
              Phục hồi dữ liệu Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="mt-[70px]">
            <p className="mb-[5px] text-[24px] font-medium uppercase relative before:content-[''] before:absolute before:w-[80px] before:h-[4px] before:bg-blue-400 before:top-[45px] before:left-0">
              OUR SERVICE
            </p>
            <div className="mt-[50px] grid sm:grid-cols-2 md:grid-cols-3 gap-x-[40px] gap-y-[70px]">
              <div className="m-0">
                <div className="w-full">
                  <img src={post_1} alt="" className="w-full" />
                </div>
                <div className="mt-[30px]">
                  <p className="text-[24px] text-[#000] font-medium mb-[15px]">
                    Phục hồi dữ liệu
                  </p>
                  <p className="text-[#707070] text-[15px] leading-[21px]">
                   Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                  </p>
                  <div className="mt-[30px]">
                    <Link
                      to=""
                      className=" bg-[#039ee3] hover:bg-[#252525]  px-[30px] py-[15px] uppercase text-[14px] font-medium  text-white "
                    >
                      {" "}
                      View Service
                    </Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="w-full">
                  <img src={post_1} alt="" className="w-full" />
                </div>
                <div className="mt-[30px]">
                  <p className="text-[24px] tetx-[#000] font-medium mb-[15px]">
                    Phục hồi dữ liệu
                  </p>
                  <p className="text-[#707070] text-[15px] leading-[21px]">
                   Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                  </p>
                  <div className="mt-[30px]">
                    <Link
                      to=""
                      className=" bg-[#039ee3] hover:bg-[#252525]  px-[30px] py-[15px] uppercase text-[14px] font-medium  text-white "
                    >
                      {" "}
                      View Service
                    </Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="w-full">
                  <img src={post_1} alt="" className="w-full" />
                </div>
                <div className="mt-[30px]">
                  <p className="text-[24px] tetx-[#000] font-medium mb-[15px]">
                    Phục hồi dữ liệu
                  </p>
                  <p className="text-[#707070] text-[15px] leading-[21px]">
                   Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                  </p>
                  <div className="mt-[30px]">
                    <Link
                      to=""
                      className=" bg-[#039ee3] hover:bg-[#252525]  px-[30px] py-[15px] uppercase text-[14px] font-medium  text-white "
                    >
                      {" "}
                      View Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f8f8] mt-[170px] py-[100px]">
          <div className="container mx-auto">
            <div className=" text-left ">
              <p className="text-[35px] text-[#000] font-medium mt-[15px] uppercase">
              NHÂN VIÊN CÓ KINH NGHIỆM
              </p>
              <p className="text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[50px] before:left-0 ">
              Các chuyên gia của chúng tôi đã được giới thiệu trên báo chí nhiều lần.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] mt-[70px]">
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
      </div>
    </>
  );
};

export default ServiceDetail;
