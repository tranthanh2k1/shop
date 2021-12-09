import React from "react";

const Users = () => {
  return (
    <>
      <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">
          <div className="px-0">
            <p className="text-[22px] font-medium ">Danh sách tài khoản</p>
            <div className="mt-[20px]">
              <button className="text-[14px] bg-red-500 text-white rounded-[3px] px-[7px] py-[5px] ">
                Thêm tài khoản
              </button>
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.8fr] font-medium pb-[15px] border-b-2 border-gray-500 px-[10px]">
              <div>STT</div>
              <div>Name</div>
              <div>Email</div>
              <div>Position</div>
              <div>Action</div>
            </div>
            <div className="text-[14px] ">
              <div className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.8fr] py-[10px] border-b border-gray-300 px-[10px]">
                <div className="font-medium">1</div>
                <div className="pr-[10px]">Truong dinh tuyen</div>
                <div className="pr-[10px]">abc@gmail.com</div>
                <div className="pr-[10px]">qacfjacnfbja</div>
                <div className="">ajkwndc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
