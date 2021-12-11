import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgHome1 from "../../../Images/home_01.png";
import i1 from "../../../Images/i1.png";
import i2 from "../../../Images/i2.png";
import i3 from "../../../Images/i3.png";
import i4 from "../../../Images/i4.png";
import si1 from "../../../Images/si1.png";
import si2 from "../../../Images/si2.png";
import si3 from "../../../Images/si3.png";
import si4 from "../../../Images/si4.png";
import si5 from "../../../Images/si5.png";
import si6 from "../../../Images/si6.png";
import test_bg from "../../../Images/test_bg.png";
import phone_icon from "../../../Images/phone_icon.png";
import post01 from "../../../Images/post-03.jpg";
import post02 from "../../../Images/post-04.jpg";
import post03 from "../../../Images/post-06.jpg";

const HomePage = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <>
      <div
        className="  h-[500px] lg:h-[610px] z-[-1] flex bg-blue-500 bg-no-repeat bg-top relative before:content-[''] before:block before:absolute bg-cover before:w-full before:h-full before:top-0 before:left-0 before:bg-gray-700 before:bg-opacity-[50%] before:z-10"
        style={{ backgroundImage: `url(${imgHome1})` }}
      >
        <div className="m-auto relative z-50 before:content-[''] before:block before:absolute before:w-[70%] before:h-[125%] before:top-0 before:left-[50%] before:translate-x-[-50%] before:bg-[#039ee3] before:z-[-1]">
          <p className=" text-[40px] text-center md:text-[60px] lg:text-[76px] text-white font-bold ">
            Dịch vụ máy tính
          </p>
          <p className="text-white text-[14px] text-center tracking-[4px] mt-[-10px]">
            Hãy đến với ACESHOP
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-[100px]">
        <div className=" text-center ">
          <p className=" text-[30px] md:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
            Lý do chọn chúng tôi
          </p>
          <p className="text-[18px] md:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[50px] before:left-[50%] before:translate-x-[-50%]">
            Dịch vụ sửa chữa nhanh nhất với giá tốt nhất!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] md:gap-[80px] mt-[100px]">
          <div className="text-center">
            <div className="w-[70px] lg:w-[100px] mx-auto">
              <img src={i1} alt="" />
            </div>
            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
            Phục hồi dữ liệu
            </p>
            <p className="text-[#707070]  text-[15px]">
              {/* Perspiciatis eos quos totam cum minima aut! */}
            </p>
          </div>
          <div className="text-center">
            <div className="w-[70px] lg:w-[100px] mx-auto">
              <img src={i2} alt="" />
            </div>
            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
            Sửa máy tính
            </p>
            <p className="text-[#707070]  text-[15px]">
              {/* Perspiciatis eos quos totam cum minima aut! */}
            </p>
          </div>
          <div className="text-center">
            <div className="w-[70px] lg:w-[100px] mx-auto">
              <img src={i3} alt="" />
            </div>
            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              Bảo trì bảo dưỡng
            </p>
            <p className="text-[#707070]  text-[15px]">
              {/* Perspiciatis eos quos totam cum minima aut! */}
            </p>
          </div>
          <div className="text-center">
            <div className="w-[70px] lg:w-[100px] mx-auto">
              <img src={i4} alt="" />
            </div>
            <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
            Giải pháp mạng
            </p>
            <p className="text-[#707070]  text-[15px]">
              {/* Perspiciatis eos quos totam cum minima aut! */}
            </p>
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.{" "}
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.{" "}
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
               Bảo trì bảo dưỡng các thiết bị điện tử
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.{" "}
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" pl-[15px] mt-[30px] md:mt-[20px]">
          <p className="text-[24px] font-medium mb-[20px]">
          Cần khôi phục tệp?
          </p>
          <p className="text-[15px] text-[#707070] leading-[21px]">
          Điều gì sẽ xảy ra nếu bạn phát hiện có những dữ liệu quan trọng đã bị xóa và mất hoàn toàn trong thùng rác (Recycle Bin)? Lựa chọn tốt nhất là chính là sử dụng phần mềm khôi phục dữ liệu miễn phí để  giải quyết vấn đề này một cách dễ dàng, trả lại các dữ liệu quan trọng cho bạn...
          </p>
          <button className="uppercase mt-[30px] text-[14px] text-white font-bold rounded-[100px] px-[40px] py-[15px] bg-[#17a5e9]">
            Xem thêm
          </button>
        </div>
      </div>
      <div className="mt-[100px] py-[100px] bg-[#f8f8f8]  gross_layout relative">
        <div className="container mx-auto">
          <div className=" text-left ">
            <p className="text-[30px] sm:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
               QUÁ TRÌNH DỊCH VỤ
            </p>
            <p className="text-[18px] md:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[60px] md:before:top-[50px] before:left-0 ">
            Cách dễ dàng và hiệu quả để sửa chữa thiết bị của bạn.
            </p>
          </div>
          <div className=" md:w-[65%] grid grid-cols-2 sm:grid-cols-3 gap-x-[15px] md:gap-x-[30px] gap-y-[50px] mt-[100px]">
            <div className=" text-center md:text-left">
              <div className="w-[50px] inline-block md:w-[65px]">
                <img src={si1} alt="" />
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              Dịch vụ nhanh chóng
              </p>
              <p className="text-[#707070]  text-[15px]">
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo.
              </p>
            </div>

            <div className="text-left">
              <div className="w-[50px] md:w-[65px]">
                <img src={si2} alt="" />
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              Thanh toán an toàn
              </p>
              <p className="text-[#707070]  text-[15px]">
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo.
              </p>
            </div>
            <div className="text-left">
              <div className="w-[50px] md:w-[65px]">
                <img src={si3} alt="" />
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              Dịch vụ nhanh chóng
              </p>
              <p className="text-[#707070]  text-[15px]">
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo.
              </p>
            </div>
            <div className="text-left">
              <div className="w-[50px] md:w-[65px]">
                <img src={si4} alt="" />
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              Đội ngũ chuyên gia
              </p>
              <p className="text-[#707070]  text-[15px]">
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo.
              </p>
            </div>
            <div className="text-left">
              <div className="w-[50px] md:w-[65px]">
                <img src={si5} alt="" />
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              Dịch vụ giá cả phải chăng
              </p>
              <p className="text-[#707070]  text-[15px]">
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo.
              </p>
            </div>
            <div className="text-left">
              <div className="w-[50px] md:w-[65px]">
                <img src={si6} alt="" />
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[10px]">
              90 ngày bảo hành
              </p>
              <p className="text-[#707070]  text-[15px]">
                Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-[100px] py-[100px] bg-[#f8f8f8]  right_gross_layout  relative">
        <div className="container mx-auto">
          <div className=" text-right ">
            <p className="text-[30px] md:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
            PHẢN HỒI CỦA CHÚNG TÔI
            </p>
            <p className="text-[18px] md:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[50px] before:right-0 ">
            Cách dễ dàng và hiệu quả để sửa chữa thiết bị của bạn.
            </p>
          </div>
          <div className="w-full md:w-[65%] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-x-[30px] gap-y-[50px] mt-[100px] md:float-right">
            <div className="text-center md:text-right">
              <div className=" flex justify-center md:justify-end">
                <span className="text-[50px] text-[#17a5e9]">
                  <i className="far fa-smile"></i>
                </span>
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[-7px]">
                Khách hàng hài lòng
              </p>
              <p className="font-medium text-[40px]">2150</p>
            </div>

            <div className="text-center md:text-right">
              <div className=" flex justify-center md:justify-end">
                <span className="text-[50px] text-[#17a5e9]">
                  <i className="fas fa-laptop"></i>
                </span>
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[-7px]">
                Laptop được sửa
              </p>
              <p className="font-medium text-[40px]">2150</p>
            </div>
            <div className="text-center md:text-right">
              <div className=" flex justify-center md:justify-end">
                <span className="text-[50px] text-[#17a5e9]">
                  <i className="fas fa-desktop"></i>
                </span>
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[-7px]">
                Fast service
              </p>
              <p className="font-medium text-[40px]">2150</p>
            </div>
            <div className="text-center md:text-right">
              <div className=" flex justify-center md:justify-end">
                <span className="text-[50px] text-[#17a5e9]">
                  <i className="fab fa-windows"></i>
                </span>
              </div>
              <p className="text-[18px] text-[#000] font-medium mt-[20px] mb-[-7px]">
                Fast service
              </p>
              <p className="font-medium text-[40px]">2150</p>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </div>
       */}
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
              Khách hàng nói gì?
            </p>
            <p className="text-[20px] mb-[10px] relative before:content-[''] before:absolute before:w-[80px] before:h-[4px] before:bg-blue-400 before:top-[45px] before:left-0">
            Đây là lời chứng thực từ khách hàng ..
            </p>

            <div className="md:w-[500px] mt-[50px]">
              <p className="">
              Cảm ơn bạn đã làm cho nó không đau, dễ chịu và hơn hết là không rắc rối! Tôi ước gì tôi sẽ nghĩ về nó đầu tiên. Tôi thực sự hài lòng với dịch vụ máy tính xách tay đầu tiên của mình.
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
              YÊU CẦU BÁO GIÁ MIỄN PHÍ
              </p>
              <p className="">
              Nhận câu trả lời và lời khuyên từ những người bạn muốn. 
              </p>
            </div>
          </div>
          <div className="">
            <button className=" bg-[#252525] text-white text-[14px] rounded-[100px] px-[30px] py-[15px] hover:text-black hover:bg-white font-medium">
              LIÊN HỆ
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[170px] mb-[100px]">
        <div className=" text-left ">
          <p className="text-[30px] md:text-[35px] text-[#000] font-medium mt-[15px] uppercase">
            BÀI VIẾT MỚI NHẤT 
          </p>
          <p className="text-[18px] md:text-[20px] text-[#898989] relative before:content-[''] before:absolute before:w-[80px] before:h-[5px] before:bg-blue-400 before:top-[50px] before:left-0 ">
          Dễ dàng và hiệu quả để sửa chữa thiết bị của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-[70px] gap-[50px]">
          <div className="m-0">
            <div className="w-full ">
              <img src={post01} alt="" />
            </div>
            <p className="text-[14px] text-[#707070] mt-[20px] mb-[15px]">
              <span className="text-[14px]">
                {/* <i className="fal fa-clock"></i> */}
              </span>{" "}
              {/* April 16, 2018 ( In Maintenance ) */}
            </p>
            <p className="text-[18px] font-medium">
            Tại sao máy tính của bạn ghét bạn
            </p>
            <p className="text-[15px] text-[#707070] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur quam justo, pretium
              adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...
            </p>
          </div>
          <div className="m-0">
            <div className="w-full ">
              <img src={post02} alt="" />
            </div>
            <p className="text-[14px] text-[#707070] mt-[20px] mb-[15px]">
              <span className="text-[14px]">
                {/* <i className="fal fa-clock"></i> */}
              </span>{" "}
              {/* April 16, 2018 ( In Maintenance ) */}
            </p>
            <p className="text-[18px] font-medium">
            Mẹo dễ dàng để sửa chữa máy tính
            </p>
            <p className="text-[15px] text-[#707070] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur quam justo, pretium
              adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...
            </p>
          </div>
          <div className="m-0">
            <div className="w-full ">
              <img src={post03} alt="" />
            </div>
            <p className="text-[14px] text-[#707070] mt-[20px] mb-[15px]">
              <span className="text-[14px]">
                {/* <i className="fal fa-clock"></i> */}
              </span>{" "}
              {/* April 16, 2018 ( In Maintenance ) */}
            </p>
            <p className="text-[18px] font-medium">
            Bảo trì máy tính 2021
            </p>
            <p className="text-[15px] text-[#707070] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur quam justo, pretium
              adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
