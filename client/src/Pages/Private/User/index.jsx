import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'
import { API } from '../../../constant'

const Users = () => {
  const [dataUser, setDataUser] = useState()
  console.log(dataUser)

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery().get("page");

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const { data } = await axios.get(`${API}/user/list?page=${query}`)

          setDataUser(data)
        } catch (error) {
          console.log("error", error.response)
        }
      } else {
        try {
          const { data } = await axios.get(`${API}/user/list?page=1`)

          setDataUser(data)
        } catch (error) {
          console.log("error", error.response)
        }
      }
    }

    fetchData()
  }, [query])

  return (
    <>
      <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
        <div className="mb-1 w-full ">
          <div className="px-0">
            <p className="text-[22px] font-medium ">Danh sách dịch vụ</p>
          </div>
          <div className="mt-[50px]">
            <div className="grid grid-cols-[0.2fr,1.3fr,1.2fr,0.8fr,0.8fr,0.8fr] px-[10px] font-medium  pb-[15px] border-b-2 border-gray-500">
              <div>#</div>
              <div>Tên người dùng</div>
              <div>Email</div>
              <div>Số điện thoại</div>
              <div>Trạng thái</div>
              <div>
                {/* <Link to="/admin/service/add" className="text-white px-2 py-[5px] text-[14px] bg-green-500 rounded-[5px]">
                  Thêm dịch vụ
                </Link> */}
              </div>
            </div>
            <div className="text-[14px]">
              {dataUser && dataUser.user.map((item, index) => (
                <div key={index} className="grid grid-cols-[0.2fr,1.3fr,1.2fr,0.8fr,0.8fr,0.8fr] py-[10px] px-[10px] border-b border-gray-300">
                  <div className="font-medium">{index + 1}</div>
                  <div className="pr-[10px]">{item.username}</div>
                  <div className="pr-[10px]">{item.email}</div>
                  <div className="pr-[10px]">{item.phone}</div>
                  <div className="pr-[10px]">{item.status ? 'Hoạt đông' : 'Dừng hoạt đông'}</div>
                  <div className="">
                    <Link to={`/admin/user/detail/${item._id}`} className="text-white px-3 py-1 bg-blue-500 rounded-[5px]">
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {dataUser && dataUser.totalPage && (
            <div class="flex flex-col items-center my-12">
              <div class="flex text-gray-700">
                {query > 1 && (
                  <Link
                    to={`/admin/user/list?page=${Number(query) - 1}`}
                    class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Link>
                )}
                <div class="flex h-12 font-medium rounded-full bg-gray-200">
                  {Array(dataUser.totalPage).fill(1).map((item, index) => (
                    <Link
                      to={`/admin/user/list?page=${index + 1}`}
                      class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">{index + 1}
                    </Link>
                  ))}

                </div>
                {query < dataUser.totalPage && (
                  <Link
                    to={`/admin/user/list?page=${Number(query) + 1}`}
                    class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
