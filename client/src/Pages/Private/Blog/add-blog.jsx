import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { API } from '../../../constant';
import { useHistory } from 'react-router-dom';
import firebase from '../../../firebase'

const AddBlogPage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')

    const history = useHistory()

    const handleImage = (e) => {
        const serviceImage = e.target.files[0];
        let storageRef = firebase.storage().ref(`images/${serviceImage && serviceImage.name}`);
        storageRef.put(serviceImage).then(() => {
            storageRef.getDownloadURL().then(async (url) => {
                setImage(url)
                // localStorage.setItem("image_error", JSON.stringify(url));
            })
        })
    }

    const onSubmitAddBlog = async () => {
        try {
            const { data } = await axios.post(`${API}/blog/create`,
                {
                    title,
                    content_blog: content,
                    image_blog: image,
                    desc_blog: desc
                })
            console.log(data)
            if (data) {
                history.push('/admin/blog/list')
            }
        } catch (error) {
            console.log("error", error.respose)
        }
    }

    return (
        <div className='service w-full bg-white px-[15px] py-[20px]'>
            <h3 className='admin__page-title font-medium text-[px]'>Thêm bài viết</h3>
            <div className="max-w-[700px] mx-auto">
                <div className='service__form'>
                    <div className='service__form-group mt-[20px]'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Tiêu đề bài viết</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder='Tiêu đề bài viết...'
                            value={title}
                            autoFocus
                            className='service__form-input text-[14px] px-[20px] py-[7px] border border-gray-500 rounded-[3px] w-full focus:outline-none'
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </div>
                    <div className='service__form-group mt-[20px]'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Ảnh bài viết</span>
                        </label>
                        <input
                            type="file"
                            name="image_blog"
                            placeholder='Tiêu đề bài viết...'
                            className='service__form-input text-[14px] px-[20px] py-[7px] border border-gray-500 rounded-[3px] w-full focus:outline-none'
                            onChange={handleImage}
                        />
                    </div>
                    <div className='service__form-group mt-[20px]'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Mô tả bài viết</span>
                        </label>
                        <textarea
                            name="desc_blog"
                            type="text"
                            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                            placeholder="Mô tả lỗi"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className="mt-[20px]">
                        <h2>Nội dung bài viết</h2>
                        <CKEditor
                            editor={ClassicEditor}
                            data=""
                            // onReady={editor => {
                            //     // You can store the "editor" and use when it is needed.
                            //     console.log('Editor is ready to use!', editor);
                            // }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data)
                            }}
                        // onBlur={(event, editor) => {
                        //     console.log('Blur.', editor);
                        // }}
                        // onFocus={(event, editor) => {
                        //     console.log('Focus.', editor);
                        // }}
                        />
                    </div>
                    <button onClick={onSubmitAddBlog} className='service__button mt-3'>Thêm bài viết</button>
                </div>
            </div>
        </div >
    )
}

export default AddBlogPage
