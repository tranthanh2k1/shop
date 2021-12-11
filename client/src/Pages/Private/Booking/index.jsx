import React from "react";

const Booking = () => {
  return (
    <>
      <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">
          <div className="px-0">
            <p className="text-[22px] font-medium ">Danh sách đơn đặt lịch</p>
            <div className="grid grid-cols-3 gap-[40px] mt-[25px]">
              <form action="" className="flex items-center mt-[20px]">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-[63%] lg:w-[65%] focus:outline-none focus:border focus:border-gray-700"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-[14px] rounded-[3px] px-[15px] py-[4px]"
                >
                  Tìm kiếm
                </button>
              </form>
              <form action="">
                <p className="text-[14px]">Lọc đơn hàng theo ngày:</p>
                <form action="" className="flex items-center ">
                  <br />
                  <input
                    type="datetime-local"
                    placeholder="Tìm kiếm"
                    className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-[65%] lg:w-[70%] focus:outline-none focus:border focus:border-gray-700"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 text-white text-[14px] rounded-[3px] px-[15px] py-[4px]"
                  >
                    Lọc
                  </button>
                </form>
              </form>
              <form action="">
                <select
                  name=""
                  id=""
                  className="border border-gray-300 text-[14px] px-[15px] py-[3px] rounded-[3px] w-full mt-[23px]"
                >
                  <option value="">Tất cả</option>
                </select>
              </form>
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-[0.5fr,1fr,1fr,1.2fr,0.8fr] font-medium pb-[15px] border-b-2 border-gray-500 px-[10px]">
              <div>#</div>
              <div>Tên</div>
              <div>Thời gian</div>
              <div>Trạng thái</div>
              <div></div>
            </div>
            <div className="text-[14px] ">
              <div className="grid grid-cols-[0.5fr,1fr,1fr,1.2fr,0.8fr] py-[10px] border-b border-gray-300 px-[10px]">
                <div className="font-medium">ACEX8yFE</div>
                <div className="pr-[10px]">Truong dinh tuyen</div>
                <div className="pr-[10px]">05:43' 07/12/2021</div>
                <div className="">
                  <button className="text-white px-2 py-1 bg-yellow-400 rounded-[5px]">
                    Chờ xác nhận
                  </button>
                </div>
                <div className="">
                  <button className="text-white px-2 py-1 bg-green-400 rounded-[5px]">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">2</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">3</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
            <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
            <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
        </div>
        <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
</div>






        </div>
      </div>
    </>
  );
};

export default Booking;
