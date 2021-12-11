import React from "react";

const service = () => {
  return (
    <>
      <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">
          <div className="px-0">
            <p className="text-[22px] font-medium ">Danh sách dịch vụ</p>
          </div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-[0.2fr,1.7fr,1fr] px-[10px] font-medium  pb-[15px] border-b-2 border-gray-500">
              <div>#</div>
              <div>Tên dịch vụ</div>
             
              <div>
                <button className="text-white px-2 py-[5px] text-[14px] bg-green-500 rounded-[5px]">
                  Thêm dịch vụ
                </button>
              </div>
            </div>
            <div className="text-[14px] ">
              <div className="grid grid-cols-[0.2fr,1.7fr,1fr] py-[10px] px-[10px] border-b border-gray-300">
                <div className="font-medium">0</div>
                <div className="pr-[10px]">Thay camera iphone 7plus</div>
                <div className="">
                  <button className="text-white px-3 py-1 bg-blue-500 rounded-[5px]">
                    Sửa
                  </button>
                  <button className="text-white px-3 py-1 bg-red-500 ml-[5px] rounded-[5px]">
                    Xóa
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

export default service;
