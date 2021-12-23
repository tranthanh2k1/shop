import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { convertNumber, convertStatusString } from "../../../constant";
import { detaiBookingAction, updateStatusBookingAdminAction } from "../../../redux/actions/booking-admin";
import firebase from '../../../firebase'

const Bookingdetail = () => {
  const [isDisableWaitConfirmation, setIsDisableWaitConfirmation] = useState('true')
  const [isDisableConfirm, setIsDisableConfirm] = useState('true')
  const [isDisableFixing, setIsDisableFixing] = useState('true')
  const [isDisableSuccessfulFix, setDIsableSuccessfulFix] = useState('true')
  const [isDisableCanellation, setIsDisableCanellation] = useState('true')
  const [totalPrice, setTotalPrice] = useState('')
  const [errorPrice, setErrorPrice] = useState('')
  const [status, setStatus] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [intendTime, setIntendTime] = useState('')

  const [exactError, setExactError] = useState('')

  const { pathname } = useLocation()
  const arrayPathname = pathname.split("/")
  const id = arrayPathname[arrayPathname.length - 1]

  const { detailBooking, message, error } = useSelector(state => state.bookingAdmin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detaiBookingAction(id))
  }, [])

  useEffect(() => {
    if (detailBooking && detailBooking.status === "Wait for confirmation") {
      // setIsDisableWaitConfirmation('')
      setIsDisableConfirm('')
      setIsDisableCanellation('')
    }

    if (detailBooking && detailBooking.status === "Confirm") {
      // setIsDisableConfirm('')
      setIsDisableFixing('')
      setIsDisableCanellation('')
    }
    if (detailBooking && detailBooking.status === "Fixing") {
      // setIsDisableFixing('')
      setDIsableSuccessfulFix('')
      setIsDisableCanellation('')
    }
    if (detailBooking && detailBooking.status === "Successful fix") {
      setDIsableSuccessfulFix('')
    }
    if (detailBooking && detailBooking.status === "Cancellation of booking") {
      setIsDisableCanellation('')
    }

  }, [detailBooking, isDisableWaitConfirmation, isDisableConfirm, isDisableFixing, isDisableSuccessfulFix, isDisableCanellation])

  const valueInputRef = useRef(null)

  const handleImageError = e => {
    const serviceImage = e.target.files[0];
    let storageRef = firebase.storage().ref(`images/${serviceImage && serviceImage.name}`);
    storageRef.put(serviceImage).then(() => {
      storageRef.getDownloadURL().then(async (url) => {
        localStorage.setItem("image_error", JSON.stringify(url));
      })
    })
  }

  const handleUpdateStatus = (status) => {
    let dataReq = {
      status
    }

    if (status === 'Fixing') {
      dataReq = {
        status,
        intend_time: intendTime,
        image_desc_error: JSON.parse(localStorage.getItem("image_error")) || '',
        exact_error: exactError
      }
    }

    if (status === 'Successful fix') {
      if (detailBooking && detailBooking.total_price === '') {
        if (valueInputRef.current.value === '') {
          setErrorPrice('Bạn cần nhập giá')
          setShowModal(false)
          return false
        }

        dataReq = {
          status,
          total_price: totalPrice
        }
      }
    }

    if (!errorPrice) {
      dispatch(updateStatusBookingAdminAction(dataReq, id))
      setShowModal(false)
    }
  }

  const history = useHistory()

  const checkMessage = () => {
    if (message) {
      history.push('/admin/booking/list')
    }
  }

  const handleTotalPrice = (e) => {
    setErrorPrice('')
    setTotalPrice(e.target.value)
  }

  const handleExactError = e => {
    setExactError(e.target.value)
  }

  const handleIntendTime = e => {
    setIntendTime(e.target.value)
  }

  return (
    <>
      {error && alert(error)}
      {message && alert(message)}
      {checkMessage()}
      {detailBooking && (
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
          <div className="mb-1 w-full">
            <div className="px-0">
              <p className="text-[22px] font-medium ">
                Chi tiết đơn đặt lịch #{detailBooking.code_bill}
              </p>
            </div>
            <div className="container mx-auto mb-36 grid sm:grid-cols-[66%,34%] ">
              <div className="mt-[30px] text-[14px]">
                <p className="text-gray-600 pb-[5px]">Họ tên: {detailBooking.name}</p>
                <p className="text-gray-600 py-[5px]">Email: {detailBooking.email}</p>
                <p className="text-gray-600 py-[5px]">Số ĐT: {detailBooking.phone}</p>
                {/* <p className="text-gray-600 py-[5px]">
                  Địa chỉ: {detailBooking.address}
                </p> */}
                <p className="text-gray-600 py-[5px]">
                  Thời gian hẹn sửa:
                  <Moment format=" DD/MM/YYYY">
                    {detailBooking.repair_time}
                  </Moment>
                </p>
                <p className="text-gray-600 py-[5px]">Ca sửa: {detailBooking.correction_time}</p>
                <p className="text-gray-600 py-[5px]">
                  Khách hàng mô tả lỗi: {detailBooking.description_error}
                </p>
                {detailBooking.contact_user && (
                  <p className="text-gray-600 py-[5px] font-bold">
                    Liên hệ của khách hàng: {detailBooking.contact_user}
                  </p>
                )}
                <p className="text-gray-600 py-[5px]">
                  Dịch vụ: {detailBooking?.service_id?.name || 'Dịch vụ ảo'}
                </p>
                <p className="text-gray-600 pt-[5px]">
                  Trạng thái đơn hàng:
                  <span className="px-2 py-2 mx-3 rounded-xl text-white" style={{ backgroundColor: `${convertStatusString(detailBooking.status).bgr}` }}>{convertStatusString(detailBooking.status).content}</span>
                </p>
                <p className="text-gray-600 pt-[5px]">
                  Trạng thái thanh toán: {detailBooking.payment_method === 'unpaid' ? 'Chưa thanh toán' : ''}
                  {detailBooking.payment_method === 'paid' ? 'Đã thanh toán' : ''}
                </p>
                {detailBooking.status === 'Fixing' && (
                  <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Nhập giá tiền:
                    </label>
                    <input
                      type="text"
                      name="total_price"
                      ref={valueInputRef}
                      value={totalPrice}
                      onChange={handleTotalPrice}
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nhập giá" />
                    <span className="text-red-600">{errorPrice}</span>
                  </div>
                )}
                {detailBooking.status === 'Confirm' && (
                  <>
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Admin kiểm tra và chụp lại lỗi của máy(nếu có)
                      </label>
                      <input
                        type="file"
                        name="image_desc_error"
                        // ref={valueInputRef}
                        // value={totalPrice}
                        onChange={handleImageError}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nhập giá" />
                    </div>
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Admin kiểm tra và ghi lại lỗi của máy(bắt buộc)
                      </label>
                      <div className="mt-[10px]">
                        <textarea
                          name="exact_error"
                          type="text"
                          className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
                          placeholder="Mô tả lỗi chính xác"
                          value={exactError}
                          onChange={handleExactError}
                        />
                      </div>
                    </div>
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Thời gian dự kiến(nếu có)
                      </label>
                      <div className="mt-[10px]">
                        <input
                          name="intend_time"
                          type="date"
                          className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] text-gray-400 bg-[#f8f8f8]  focus:outline-none focus:border focus:border-gray-600"
                          onChange={handleIntendTime}
                        />
                      </div>
                    </div>
                  </>
                )}

                {detailBooking.status === 'Successful fix' && (
                  <>
                    {detailBooking.image_desc_error && (
                      <>
                        <p className="text-gray-600 pt-[5px]">
                          Ảnh lỗi của máy:
                        </p>
                        <img src={detailBooking.image_desc_error} alt="" className='w-[150px] h-[auto]' />
                      </>
                    )}
                    <p className="text-gray-600 pt-[5px]">
                      Mô tả chính xác lỗi của máy: {detailBooking.exact_error}
                    </p>
                    <p className="text-gray-600 pt-[5px]">
                      Thành tiền: {convertNumber(detailBooking.total_price)}đ
                    </p>
                  </>
                )}
              </div>
              <div className="">
                {detailBooking.status === 'Fixing' && (
                  <>
                    {detailBooking.image_desc_error && (
                      <>
                        <p className="text-gray-600 pt-[5px]">
                          Ảnh lỗi của máy:
                        </p>
                        <img src={detailBooking.image_desc_error} alt="" className='w-[150px] h-[auto]' />
                      </>
                    )}
                    <p className="text-gray-600 pt-[5px]">
                      Mô tả chính xác lỗi của máy: {detailBooking.exact_error}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="mt-[20px]">
              <button
                className="text-[14px] text-white bg-yellow-400 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableWaitConfirmation === '' ? '1' : '0.3'}` }}
                disabled={isDisableWaitConfirmation}
                onClick={() => {
                  setStatus('Wait for confirmation')
                }}
              >
                Chờ xác nhận
              </button>
              <button
                className="text-[14px] text-white bg-blue-300 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableConfirm === '' ? '1' : '0.3'}` }}
                disabled={isDisableConfirm}
                onClick={() => {
                  setStatus('Confirm')
                  setShowModal(true)
                }}
              >
                Xác nhận
              </button>
              <button
                className="text-[14px] text-white bg-blue-500 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableFixing === '' ? '1' : '0.3'}` }}
                disabled={isDisableFixing}
                onClick={() => {
                  setStatus('Fixing')
                  setShowModal(true)
                }}
              >
                Đang sửa
              </button>
              <button
                className="text-[14px] text-white bg-green-400 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableSuccessfulFix === '' ? '1' : '0.3'}` }}
                disabled={isDisableSuccessfulFix}
                onClick={() => {
                  setStatus('Successful fix')
                  setShowModal(true)
                }}
              >
                Sửa thành công
              </button>
              <button
                className="text-[14px] text-white bg-red-500 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableCanellation === '' ? '1' : '0.3'}` }}
                disabled={isDisableCanellation}
                onClick={() => {
                  setStatus('Cancellation of booking')
                  setShowModal(true)
                }}
              >
                Hủy lịch
              </button>
            </div>
            <div>
              {showModal ? (
                <div className="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed">
                  <div className="z-50 relative p-3 mx-auto my-0 max-w-full" style={{ width: 500 }}>
                    <div className="bg-white rounded shadow-lg border flex flex-col overflow-hidden px-10 py-10">
                      <div className="text-center text-2xl text-gray-700">Bạn có muốn?</div>
                      <div className="text-center font-light text-gray-700 mb-8">
                        thay đổi trạng thái cho đơn đặt lịch này
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-1"
                        >
                          Hủy
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(status)}
                          className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1"
                        >
                          Thay đổi
                        </button>
                        {/* <button
                          type="button"
                          className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1"
                          onCLick={() => console.log("hello")}
                        >
                          Thay đổi
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default Bookingdetail;
