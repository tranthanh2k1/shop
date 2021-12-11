import React, { useEffect } from "react";
import { listUserAction, removeUserAction } from '../../../redux/actions/user';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Users = () => {
  const { listUser } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listUserAction())
  }, [])

  const handleRemove = (id) => {
    dispatch(removeUserAction(id))
  }

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
              {/* <div>STT</div> */}
              <div>Name</div>
              <div>Email</div>
              <div>Phone</div>
              <div>Position</div>
              <div>Action</div>
            </div>

            <div className="text-[14px] ">
              <div className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.8fr] py-[10px] border-b border-gray-300 px-[10px]">
                {listUser && listUser.map((item, index) => {
                  <div key={index}>
                    {/* <div className="font-medium">{index}</div> */}
                    <div className="pr-[10px]">{item.username}</div>
                    <div className="pr-[10px]">{item.email}</div>
                    <div className="pr-[10px]">{item.phone}</div>
                    <div className="pr-[10px]">Admin</div>
                    <div className="">
                        <button onClick={() => handleRemove(item._id)} className="text-white px-3 py-1 bg-red-500 ml-[5px] rounded-[5px]">Xoá</button>
                    </div>
                  </div>
                })}

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
