import React from 'react'

const ForgotPasswordPage = () => {
    return (
        <div>
            {/* Container */}
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen px-6">
                    {/* Row */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* Col */}
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://source.unsplash.com/oWTW-jNGl9I/600x800")' }} />
                        {/* Col */}
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl">Quên mật khẩu?</h3>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Địa chỉ Email..." />
                                </div>
                                <div className="mb-6 text-center">
                                    <button className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
                                        Quên mật khẩu
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./register.html">
                                        Create an Account!
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./index.html">
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ForgotPasswordPage
