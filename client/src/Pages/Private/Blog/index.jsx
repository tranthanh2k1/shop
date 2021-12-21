import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../constant'

const BlogAdminPage = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${API}/blog/list`)

                setBlog(data)
            } catch (error) {
                console.log("error", error.response)
            }
        }

        fetchData()
    }, [])

    const handleRemove = async (id) => {
        try {
            const { data } = await axios.delete(`${API}/blog/delete/${id}`)

            const newBlog = blog.filter(item => item._id !== data._id)
            setBlog(newBlog)
        } catch (error) {
            console.log("error", error.response)
        }
    }

    return (
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
            <div className="mb-1 w-full ">
                <div className="px-0">
                    <p className="text-[22px] font-medium ">Danh sách bài viết</p>
                </div>
                <div className="mt-[50px]">
                    <div className="grid grid-cols-[0.2fr,1fr,1fr,1.5fr,1.5fr] px-[10px] font-medium  pb-[15px] border-b-2 border-gray-500">
                        <div>#</div>
                        <div>Tiêu đề</div>
                        <div>Ảnh</div>
                        <div>Mô tả</div>
                        {/* <div>Nội dung</div> */}
                        <div>
                            <Link to="/admin/blog/add" className="text-white px-2 py-[5px] text-[14px] bg-green-500 rounded-[5px]">
                                Thêm bài viết
                            </Link>
                        </div>
                    </div>
                    <div className="text-[14px]">
                        {blog && blog.map((item, index) => (
                            <div key={index} className="grid grid-cols-[0.2fr,1fr,1fr,1.5fr,1.5fr] py-[10px] px-[10px] border-b border-gray-300">
                                <div className="font-medium">{index + 1}</div>
                                <div className="pr-[10px]">{item.title}</div>
                                <div className="pr-[10px]">
                                    <img src={item.image_blog} alt="" />
                                </div>
                                <div className="pr-[10px]">{item.desc_blog}</div>
                                {/* <div className="pr-[10px] min-h-[50px]" dangerouslySetInnerHTML={{ __html: item.content_blog }}></div> */}
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

export default BlogAdminPage
