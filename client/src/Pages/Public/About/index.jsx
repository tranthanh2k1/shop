import React, { useState } from "react";
import { Link } from "react-router-dom";
import inner_page_banner from "../../../Images/inner_page_banner.jpg";
import post_06 from "../../../Images/post-06.jpg";
import team_member_1 from "../../../Images/team-member-1.jpg";

const AboutPage = () => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

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
                        Về chúng tôi
                    </p>
                    <div className="flex">
                        <Link to="/" className="text-[#039ee3]">
                            Trang chủ
                        </Link>
                        <span className="text-white ml-[5px]"> / Về chúng tôi</span>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <div className="container mx-auto">
                    <div className="text-center pb-[20px] relative before:content-[''] before:absolute before:w-[100px] before:h-[5px] before:bg-blue-400 before:bottom-[0px] before:left-[50%] before:translate-x-[-50%]">
                        <p className=" text-[30px] md:text-[35px] leading-[36px] font-medium">
                            CHÚNG TÔI LÀ CÔNG TY HÀNG ĐẦU
                        </p>
                        <p className="text-[#898989] text-[20px] pt-[10px]">
                            Dịch vụ sửa chữa nhanh nhất với giá tốt nhất!
                        </p>
                    </div>
                    <div className="mt-[60px] grid grid-cols-2 gap-[20px] bg-[#f5f5f5]">
                        <div className="p-[50px]">
                            <div className="text-left w-full ">
                                <p className="text-[24px] text-[#000] mb-[20px] font-medium">
                                    Chúng ta làm gì
                                </p>
                                <p className="leading-[24px] text-[15px] text-[#707070]">
                                    Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn của ngành kể từ những năm 1500, khi một máy in không xác định chiếm được ...
                                </p>
                                <ul className="mt-[15px] list-none">
                                    <li className="flex items-center w-full my-[5px] text-[15px] text-[#555454] font-medium">
                                        <i class="fas fa-check-circle mr-[10px]"></i>
                                        Thèm dai dẳng cho một trong những tiếng cười này
                                    </li>
                                    <li className="flex items-center w-full my-[5px] text-[15px] text-[#555454] font-medium">
                                        <i class="fas fa-check-circle mr-[10px]"></i>
                                        Thèm dai dẳng cho một trong những tiếng cười này
                                    </li>
                                    <li className="flex items-center w-full my-[5px] text-[15px] text-[#555454] font-medium">
                                        <i class="fas fa-check-circle mr-[10px]"></i>
                                        Thèm dai dẳng cho một trong những tiếng cười này
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full">
                            <img src={post_06} alt="" className="max-w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mb-36 grid sm:grid-cols-[66%,34%]  mt-[100px]">
                <div className=" pr-[15px]">
                    <div className="m-0">
                        <div
                            onClick={() => setBox1(!box1)}
                            className={
                                box1
                                    ? "flex justify-between px-[25px] text-white bg-[#17a5e9] py-[15px] border border-gray-300 cursor-pointer"
                                    : "flex justify-between px-[25px] py-[15px] border border-gray-300 cursor-pointer"
                            }
                        >
                            <div className="flex- items-center">
                                <span className="mr-[15px]">
                                    <i
                                        class={
                                            box1
                                                ? "fas fa-chart-bar text-[20px] text-white"
                                                : "fas fa-chart-bar text-[20px] text-[#17a5e9]"
                                        }
                                    ></i>
                                </span>
                                Khôi phục hoàn toàn từ ổ đĩa cục bộ và bên ngoài
                            </div>
                            <span className=" text-[#000]">
                                <i
                                    className={
                                        box1
                                            ? "fas fa-angle-down rotate-[180deg] text-white"
                                            : "fas fa-angle-down  "
                                    }
                                ></i>
                            </span>
                        </div>
                        <div className={box1 ? "px-[25px] mt-[15px]" : "hidden"}>
                            <p className=" text-box  text-[14px] leading-[24px] text-[#707070]">
                                Trái với suy nghĩ của nhiều người, Lorem Ipsum không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, khiến nó hơn 2000 năm tuổi. Richard McClintock, một giáo sư tiếng Latinh tại Đại học Hampden-Sydney ở Virginia, đã tra cứu một trong những từ Latinh khó hiểu hơn, consectetur, từ một đoạn văn của Lorem Ipsum, và xem qua các trích dẫn của từ này trong văn học cổ điển, đã phát hiện ra nguồn gốc không thể chối cãi.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="mt-[16px]">
                        <div
                            onClick={() => setBox2(!box2)}
                            className={
                                box2
                                    ? "flex justify-between px-[25px] text-white bg-[#17a5e9] py-[15px] border border-gray-300 cursor-pointer"
                                    : "flex justify-between px-[25px] py-[15px] border border-gray-300 cursor-pointer"
                            }
                        >
                            <div className="flex- items-center">
                                <span className="mr-[15px]">
                                    <i
                                        class={
                                            box2
                                                ? "fas fa-plane text-[18px] text-white"
                                                : "fas fa-plane text-[18px] text-[#17a5e9]"
                                        }
                                    ></i>
                                </span>
                                Khôi phục ảnh, hình ảnh, video và âm thanh
                            </div>
                            <span className=" text-[#000]">
                                <i
                                    className={
                                        box2
                                            ? "fas fa-angle-down rotate-[180deg] text-white"
                                            : "fas fa-angle-down  "
                                    }
                                ></i>
                            </span>
                        </div>
                        <div className={box2 ? "px-[25px] mt-[15px]" : "hidden"}>
                            <p className="text-[14px] leading-[24px] text-[#707070]">
                                Trái với suy nghĩ của nhiều người, Lorem Ipsum không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, khiến nó hơn 2000 năm tuổi. Richard McClintock, một giáo sư tiếng Latinh tại Đại học Hampden-Sydney ở Virginia, đã tra cứu một trong những từ Latinh khó hiểu hơn, consectetur, từ một đoạn văn của Lorem Ipsum, và xem qua các trích dẫn của từ này trong văn học cổ điển, đã phát hiện ra nguồn gốc không thể chối cãi.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="mt-[16px]">
                        <div
                            onClick={() => setBox3(!box3)}
                            className={
                                box3
                                    ? "flex justify-between px-[25px] text-white bg-[#17a5e9] py-[15px] border border-gray-300 cursor-pointer"
                                    : "flex justify-between px-[25px] py-[15px] border border-gray-300 cursor-pointer"
                            }
                        >
                            <div className="flex- items-center">
                                <span className="mr-[15px]">
                                    <i
                                        class={
                                            box3
                                                ? "fas fa-star text-[18px] text-white"
                                                : "fas fa-star text-[18px] text-[#17a5e9]"
                                        }
                                    ></i>
                                </span>
                                Khôi phục điện thoại di động
                            </div>
                            <span className=" text-[#000]">
                                <i
                                    className={
                                        box3
                                            ? "fas fa-angle-down rotate-[180deg] text-white"
                                            : "fas fa-angle-down  "
                                    }
                                ></i>
                            </span>
                        </div>
                        <div className={box3 ? "px-[25px] mt-[15px]" : "hidden"}>
                            <p className="text-[14px] leading-[24px] text-[#707070]">
                                Trái với suy nghĩ của nhiều người, Lorem Ipsum không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, khiến nó hơn 2000 năm tuổi. Richard McClintock, một giáo sư tiếng Latinh tại Đại học Hampden-Sydney ở Virginia, đã tra cứu một trong những từ Latinh khó hiểu hơn, consectetur, từ một đoạn văn của Lorem Ipsum, và xem qua các trích dẫn của từ này trong văn học cổ điển, đã phát hiện ra nguồn gốc không thể chối cãi.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="mt-[16px]">
                        <div
                            onClick={() => setBox4(!box4)}
                            className={
                                box4
                                    ? "flex justify-between px-[25px] text-white bg-[#17a5e9] py-[15px] border border-gray-300 cursor-pointer"
                                    : "flex justify-between px-[25px] py-[15px] border border-gray-300 cursor-pointer"
                            }
                        >
                            <div className="flex- items-center">
                                <span className="mr-[15px]">
                                    <i
                                        class={
                                            box4
                                                ? "fas fa-chart-bar text-[20px] text-white"
                                                : "fas fa-chart-bar text-[20px] text-[#17a5e9]"
                                        }
                                    ></i>
                                </span>
                                Khôi phục hoàn toàn từ ổ đĩa cục bộ và bên ngoài
                            </div>
                            <span className=" text-[#000]">
                                <i
                                    className={
                                        box4
                                            ? "fas fa-angle-down rotate-[180deg] text-white"
                                            : "fas fa-angle-down  "
                                    }
                                ></i>
                            </span>
                        </div>
                        <div className={box4 ? "px-[25px] mt-[15px]" : "hidden"}>
                            <p className="text-[14px] leading-[24px] text-[#707070]">
                                Trái với suy nghĩ của nhiều người, Lorem Ipsum không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, khiến nó hơn 2000 năm tuổi. Richard McClintock, một giáo sư tiếng Latinh tại Đại học Hampden-Sydney ở Virginia, đã tra cứu một trong những từ Latinh khó hiểu hơn, consectetur, từ một đoạn văn của Lorem Ipsum, và xem qua các trích dẫn của từ này trong văn học cổ điển, đã phát hiện ra nguồn gốc không thể chối cãi.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" pl-[15px] mt-[30px] md:mt-[20px]">
                    <p className="text-[24px] font-medium mb-[20px]">
                        Cần khôi phục tệp?
                    </p>
                    <p className="text-[15px] text-[#707070] leading-[21px]">
                        Nhưng để bạn có thể hiểu rằng mọi lỗi lầm khi sinh ra đều là niềm vui của việc buộc tội và ca ngợi nỗi đau, tôi sẽ mở ra toàn bộ sự việc;
                    </p>
                    <button className="uppercase mt-[30px] text-[14px] text-white font-bold rounded-[100px] px-[40px] py-[15px] bg-[#17a5e9]">
                        Đọc thêm
                    </button>
                </div>
            </div>
            <div className="mt-[100px] py-[100px] bg-[#f8f8f8]  gross_layout relative">
                <div className="container mx-auto">
                    <div className=" text-left ">
                        <p className="text-[30px] sm:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
                            VỀ DỊCH VỤ
                        </p>
                        <p className="text-[18px] md:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[60px] md:before:top-[50px] before:left-0 ">
                            Cách dễ dàng và hiệu quả để sửa chữa thiết bị của bạn.
                        </p>
                    </div>
                    <div className=" md:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-[15px] md:gap-x-[50px] gap-y-[50px] mt-[100px]">
                        <div className=" text-center md:text-left">
                            <div className="w-[95px] h-[95px] text-center leading-[92px] text-[40px] text-white border-[2px] border-[#17a5e9] bg-[#17a5e9] hover:text-[#17a5e9] hover:bg-white rounded-full">
                                <i className="fas fa-wrench"></i>
                            </div>
                            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">

                                Dịch vụ trung thực
                            </p>
                            <p className="text-[#707070]  text-[15px]">
                                Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                            </p>
                        </div>

                        <div className="text-left">
                            <div className="w-[95px] h-[95px] text-center leading-[92px] text-[40px] text-white border-[2px] border-[#17a5e9] bg-[#17a5e9] hover:text-[#17a5e9] hover:bg-white rounded-full">
                                <i className="fas fa-cog"></i>
                            </div>
                            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
                                Thanh toán an toàn
                            </p>
                            <p className="text-[#707070]  text-[15px]">
                                Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                            </p>
                        </div>
                        <div className="text-left">
                            <div className="w-[95px] h-[95px] text-center leading-[92px] text-[40px] text-white border-[2px] border-[#17a5e9] bg-[#17a5e9] hover:text-[#17a5e9] hover:bg-white rounded-full">
                                <i className="fas fa-history"></i>
                            </div>
                            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
                                Đội ngũ chuyên gia
                            </p>
                            <p className="text-[#707070]  text-[15px]">
                                Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                            </p>
                        </div>
                        <div className="text-left">
                            <div className="w-[95px] h-[95px] text-center leading-[92px] text-[40px] text-white border-[2px] border-[#17a5e9] bg-[#17a5e9] hover:text-[#17a5e9] hover:bg-white rounded-full">
                                <i className="far fa-heart"></i>
                            </div>
                            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
                                Dịch vụ giá cả phải chăng
                            </p>
                            <p className="text-[#707070]  text-[15px]">
                                Việc thực hiện các tiêu chuẩn chịu blah để tận dụng nó.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-white mt-[20px] py-[100px]">
                <div className="container mx-auto">
                    <div className=" text-left ">
                        <p className="text-[30px] sm:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
                            NHÂN VIÊN CÓ KINH NGHIỆM
                        </p>
                        <p className=" text-[18px] sm:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[70px] sm:before:top-[50px] before:left-0 ">
                            Các chuyên gia của chúng tôi đã được giới thiệu trên báo chí nhiều lần.
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
            </div> */}
        </>
    );
};

export default AboutPage;