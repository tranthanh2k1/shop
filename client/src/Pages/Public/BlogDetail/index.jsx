import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { API } from '../../../constant'

const BlogDetailPage = () => {
    const [blog, setBlog] = useState()
    console.log(blog)

    const { pathname } = useLocation()
    const arrayPathname = pathname.split("/")
    const id = arrayPathname[arrayPathname.length - 1]

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${API}/blog/detail/${id}`)

            setBlog(data)
        }

        fetchData()
    }, [])

    return (
        <div className='container mx-auto'>
            {blog && (
                <>
                    <h2 className='text-2xl mt-[20px]'>{blog.title}</h2>
                    <div className='mt-[25px] mb-[50px]' dangerouslySetInnerHTML={{ __html: blog.content_blog }}></div>
                </>
            )}
        </div>
    )
}

export default BlogDetailPage
