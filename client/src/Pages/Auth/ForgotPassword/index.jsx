import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { API } from '../../../constant'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('')

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const history = useHistory()

    const handleEmail = async () => {
        try {
            const { data } = await axios.put(`${API}/forgot-password`, { email })

            alert("Bạn vui lòng kiểm trả email để lấy lại mật khẩu mới")
            history.push('/auth/login')
        } catch (error) {
            console.log("error", error.response)
        }
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen px-6">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://source.unsplash.com/oWTW-jNGl9I/600x800")' }} />
                    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div className="px-8 mb-4 text-center">
                            <h3 className="pt-4 mb-2 text-2xl">Quên mật khẩu?</h3>
                        </div>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Địa chỉ Email..."
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleEmail}
                                >
                                    Quên mật khẩu
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/auth/register">
                                    Tạo tài khoản mới?
                                </Link>
                            </div>
                            <div className="text-center">
                                <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/auth/login">
                                    Bạn đã có tài khoản? Đăng nhập!
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
