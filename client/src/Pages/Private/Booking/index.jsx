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
        </div>
      </div>
    </>
  );
};

export default Booking;
