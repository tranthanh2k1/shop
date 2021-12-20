import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createServiceAction } from '../../../redux/actions/services'
import firebase from '../../../firebase'

const AddServicePage = () => {
    const [image, setImage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const history = useHistory()

    const onSubmit = (dataForm) => {
        const serviceImage = dataForm.image;
        let storageRef = firebase.storage().ref(`images/${serviceImage && serviceImage.name}`);
        storageRef.put(serviceImage).then(() => {
            storageRef.getDownloadURL().then(async (url) => {
                const dataService = {
                    ...dataForm,
                    image: url
                }

                dispatch(createServiceAction(dataService))
                history.push('/admin/service/list')
            })
        })
    }

    return (
        <div className='service w-full bg-white px-[15px] py-[20px]'>
            <h3 className='admin__page-title font-medium text-[px]'>Thêm dịch vụ</h3>
            <div className="max-w-[700px] mx-auto">
                <form action="" className='service__form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='service__form-group mt-[20px]'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Tên dịch vụ</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Tên dịch vụ...'
                            autoFocus
                            className='service__form-input text-[14px] px-[20px] py-[7px] border border-gray-500 rounded-[3px] w-full focus:outline-none'
                            {...register('name', {
                                required: true
                            })}
                        />
                        {errors?.name?.type === "required" && <p className="form__error text-red-600">Tên dịch vụ không đc để trống</p>}
                    </div>
                    <div className="mt-[20px]">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Ảnh dịch vụ</span>
                        </label>
                        <input type="file" name="image" {...register('image')} />
                    </div>
                    <div className='mt-[20px]'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Mô tả dịch vụ</span>
                        </label>
                        <textarea
                            name="description"
                            type="text"
                            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                            placeholder="Mô tả lỗi"
                            {...register('description')}
                        />
                    </div>
                    <button type='submit' className='service__button mt-3'>Submit</button>
                </form>
            </div>
        </div >
    )
}

export default AddServicePage
