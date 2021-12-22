import React from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="m-0">
        <div className="md:grid grid-cols-[35%,65%]">
          <div className="h-200px] ld:h-full bg-blue-500">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8773323432547!2d105.74712911484185!3d21.037593692852766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345492f9144c21%3A0xa454cd045be6b1!2zMSBQaOG7kSBUcuG7i25oIFbEg24gQsO0LCBYdcOibiBQaMawxqFuZywgTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1638591028612!5m2!1svi!2s"
              className=" w-full block h-full"
              display="initial"
              position="relative"
            />
          </div>
          <div className=" bg-black px-[15px] md:px-[70px] pt-[75px] pb-[75px] relative">
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="m-auto">
                <p className="text-[14px] font-bold text-[#eee] relative before:content-[''] before:absolute before:w-[40px] before:h-[4px] before:bg-blue-400 before:top-[30px] before:left-0">
                CHỦ ĐỀ TIẾP THEO
                </p>
                <p className="text-[#666] text-[14px] font-medium leading-[24px] mt-[40px]">
                Không có cách nào dễ dàng để bắt đầu trò chơi. Nỗi đau của những mũi tên Sapien bây giờ yêu thích sự báo thù, đau đớn là điều rất muốn chuối tinh khiết, khối lượng của loài Orc sư tử.
                </p>
                <div className="flex items-center text-[#666] mt-[20px]">
                  <span className=" text-[20px] hover:text-blue-500 cursor-pointer">
                    <i class="fab fa-google-plus-g"></i>
                  </span>
                  <span className=" text-[17px] mx-[15px] hover:text-blue-500 cursor-pointer">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span className="text-[17px] hover:text-blue-500 cursor-pointer">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </div>
              </div>
              <div className="m-0">
                <p className="text-[14px] font-bold text-[#eee] relative before:content-[''] before:absolute before:w-[40px] before:h-[4px] before:bg-blue-400 before:top-[30px] before:left-0">
                LIÊN KẾT BỔ SUNG
                </p>
                <ul className="mt-[35px] text-[#666] text-[14px]">
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      {" "}
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Tuyệt đối
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      {" "}
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Các điều khoản và điều kiện
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Chính sách bảo mật
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      mới
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-[25px]">
                <p className="text-[14px] font-bold text-[#eee] relative before:content-[''] before:absolute before:w-[40px] before:h-[4px] before:bg-blue-400 before:top-[30px] before:left-0">
                DỊCH VỤ
                </p>
                <ul className="mt-[35px] text-[#666] text-[14px]">
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      {" "}
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Tuyệt đối
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      {" "}
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Các điều khoản và điều kiện
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Chính sách bảo mật
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      Mới
                    </Link>
                  </li>
                  <li className="py-[3px] hover:text-blue-400">
                    <Link to="">
                      <span>
                        <i className="fa fa-angle-right"></i>
                      </span>{" "}
                      LIÊN HỆ CHÚNG TÔI
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-[25px]">
                <p className="text-[14px] font-bold text-[#eee] relative before:content-[''] before:absolute before:w-[40px] before:h-[4px] before:bg-blue-400 before:top-[30px] before:left-0">
                LIÊN HỆ CHÚNG TÔI
                </p>
                <p className="text-[#666] text-[14px] leading-[24px] mt-[40px]">
                  123 Second Street Fifth Avenue,
                  <br />
                  Manhattan, New York
                  <br />
                  +84 966 3743 3234
                </p>
                <div className="mt-[30px] w-full sm:w-[200px] relative ">
                  <input
                    type="text"
                    className="w-full  bg-white border-none py-[6px] text-[14px] px-[15px] focus:outline-none "
                    placeholder="Email "
                  />
                  <button className="absolute right-0 top-0 bg-[#039ee3] w-[33px] h-[33px] text-white ">
                    <i class="fas fa-envelope"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center w-full text-white bg-[#039ee3] py-[15px] absolute left-0 bottom-0 text-[14px]">
              <p>ItNext © Copyrights 2019 Design by html.design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
