import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { listServiceAction, removeServiceAction } from '../../../redux/actions/services';

const ListServicePage = () => {
    const { listService } = useSelector(state => state.service)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listServiceAction())
    }, [])

    const handleRemove = (id) => {
        dispatch(removeServiceAction(id))
    }

    return (
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
            <div className="mb-1 w-full ">
                <div className="px-0">
                    <p className="text-[22px] font-medium ">Danh sách dịch vụ</p>
                </div>
                <div className="mt-[50px]">
                    <div className="grid grid-cols-[0.2fr,1.7fr,1fr] px-[10px] font-medium  pb-[15px] border-b-2 border-gray-500">
                        <div>#</div>
                        <div>Dịch vụ</div>
                        <div>
                            <Link to="/admin/service/add" className="text-white px-2 py-[5px] text-[14px] bg-green-500 rounded-[5px]">
                                Thêm dịch vụ
                            </Link>
                        </div>
                    </div>
                    <div className="text-[14px]">
                        {listService.map((item, index) => (
                            <div key={index} className="grid grid-cols-[0.2fr,1.7fr,1fr] py-[10px] px-[10px] border-b border-gray-300">
                                <div className="font-medium">{index}</div>
                                <div className="pr-[10px]">{item.name}</div>
                                <div className="">
                                    <Link to={`/admin/service/edit/${item._id}`} className="text-white px-3 py-1 bg-blue-500 rounded-[5px]">
                                        Sửa
                                    </Link>
                                    <button onClick={() => handleRemove(item._id)} className="text-white px-3 py-1 bg-red-500 ml-[5px] rounded-[5px]">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListServicePage
