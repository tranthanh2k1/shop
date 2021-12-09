import React from "react";

const Bookingdetail = () => {
  return (
    <>
      <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">
          <div className="px-0">
            <p className="text-[22px] font-medium ">
              Chi tiết đơn đặt lịch #AYGhaBG
            </p>
          </div>
          <div className="mt-[30px] text-[14px]">
            <p className="text-gray-600 pb-[5px]">Họ tên: Trương Đình Tuyển</p>
            <p className="text-gray-600 py-[5px]">Email: gavgdh@gmail.com</p>
            <p className="text-gray-600 py-[5px]">Số ĐT: 0357885498</p>
            <p className="text-gray-600 py-[5px]">
              Địa chỉ: 63 Lê Đức Thọ - Mỹ Đình
            </p>
            <p className="text-gray-600 py-[5px]">
              Thời gian sửa: 04:05 09/12/2001
            </p>
            <p className="text-gray-600 py-[5px]">Ca sửa: 09:42</p>
            <p className="text-gray-600 py-[5px]">
              Lỗi máy: Bung bản lề laptop Lenovo L340 Ideapad
            </p>
            <p className="text-gray-600 pt-[5px]">
              Trạng thái: Wait for confirmation
            </p>
          </div>
          <div className="mt-[20px]">
            <button className="text-[14px] text-white bg-yellow-400 px-[10px] py-[5px] rounded-[5px] mx-[7px]">
              Chờ xác nhận
            </button>
            <button className="text-[14px] text-white bg-blue-300 px-[10px] py-[5px] rounded-[5px] mx-[7px]">
              Xác nhận
            </button>
            <button className="text-[14px] text-white bg-blue-500 px-[10px] py-[5px] rounded-[5px] mx-[7px]">
              Đang sửa
            </button>
            <button className="text-[14px] text-white bg-green-400 px-[10px] py-[5px] rounded-[5px] mx-[7px]">
              Sửa thành công
            </button>
            <button className="text-[14px] text-white bg-red-500 px-[10px] py-[5px] rounded-[5px] mx-[7px]">
              Hủy lịch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookingdetail;
