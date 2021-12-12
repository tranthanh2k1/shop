import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createServiceAction } from '../../../redux/actions/services'
import firebase from '../../../firebase'

const AddServicePage = () => {
    const { register, handleSubmit } = useForm()

    const dispatch = useDispatch()

    const history = useHistory()

    const onSubmit = (dataForm) => {
        console.log("data", dataForm)

        const serviceImage = dataForm.image[0];
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
                <form action="" className='service__form ' onSubmit={handleSubmit(onSubmit)}>
                    <div className='service__form-group'>
                        {/* <label htmlFor="" className="service__labeel">Tên dịch vụ</label> */}
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
                    </div>
                    <label
                        class="
    w-64 mt-[10px]
    flex flex-col
    items-center
    px-4
    py-6
    bg-white
    rounded-md
    shadow-md
    tracking-wide
    uppercase
    border border-blue
    cursor-pointer
    hover:bg-purple-600 hover:text-white
    text-purple-600
    ease-linear
    transition-all
    duration-150
  "
                    >
                        <i class="fas fa-cloud-upload-alt fa-3x"></i>
                        <span class="mt-2 text-base leading-normal">Select a file</span>
                        <input type="file" class="hidden" />
                    </label>
                    <div className='mt-[20px]'>
                        <textarea
                            name="description"
                            type="text"
                            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                            placeholder="Mô tả lỗi"
                            {...register('description', {
                                required: true,
                            })}
                        />
                    </div>
                    <button type='submit' className='service__button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddServicePage
