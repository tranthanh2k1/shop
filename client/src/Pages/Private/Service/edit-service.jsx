import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateServiceAction } from '../../../redux/actions/services'
import { API } from '../../../constant'
import firebase from '../../../firebase'

const EditServicePage = () => {
    const [detailService, setDetailService] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { pathname } = useLocation()
    const arrayPathname = pathname.split("/")
    const id = arrayPathname[arrayPathname.length - 1]

    useEffect(() => {
        const getService = async () => {
            const { data } = await axios.get(`${API}/service/${id}`)
            const { detailService } = data

            setDetailService(detailService)
        }

        getService()
    }, [])

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = (dataForm) => {
        const serviceImage = dataForm.image[0];
        let storageRef = firebase.storage().ref(`images/${serviceImage && serviceImage.name}`);
        storageRef.put(serviceImage).then(() => {
            storageRef.getDownloadURL().then(async (url) => {
                const dataService = {
                    ...dataForm,
                    image: url
                }

                dispatch(updateServiceAction(id, dataService))
                history.push('/admin/service/list')
            })
        })
    }

    return (
        <div className='service w-full bg-white px-[15px] py-[20px]'>
            <h3 className='admin__page-title font-medium text-[px] text-center'>Sửa dịch vụ</h3>
            <div className="max-w-[700px] mx-auto">
                <form action="" className='service__form ' onSubmit={handleSubmit(onSubmit)}>
                    <div className='service__form-group'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Tên dịch vụ</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={detailService.name}
                            placeholder='Tên dịch vụ...'
                            autoFocus
                            className='service__form-input text-[14px] px-[20px] py-[7px] border border-gray-500 rounded-[3px] w-full focus:outline-none'
                            {...register('name', {
                                required: true
                            })}
                        />
                        {errors?.name?.type === "required" && <p className="form__error text-red-600">Tên dịch vụ không đc để trống</p>}
                    </div>
                    <div className="mt-[10px]">
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Ảnh dịch vụ</span>
                        </label>
                        <img src={detailService.image} alt="" className='w-[150px] h-[auto]' />
                        <input type="file" name="image" {...register('image')} />
                    </div>
                    <div className='mt-[20px]'>
                        <label class="block">
                            <span class="block text-sm font-medium text-gray-700 mb-1">Mô tả dịch vụ</span>
                        </label>
                        <textarea
                            name="description"
                            defaultValue={detailService.description}
                            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                            placeholder="Mô tả lỗi"
                            {...register('description')}
                        />
                    </div>
                    <button type='submit' className='service__button'>Submit</button>
                </form>
            </div >
        </div >
    )
}

export default EditServicePage
