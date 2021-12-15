import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { convertNumber } from "../../../constant";
import { detaiBookingAction, updateStatusBookingAdminAction } from "../../../redux/actions/booking-admin";

const Bookingdetail = () => {
  const [isDisableWaitConfirmation, setIsDisableWaitConfirmation] = useState('true')
  const [isDisableConfirm, setIsDisableConfirm] = useState('true')
  const [isDisableFixing, setIsDisableFixing] = useState('true')
  const [isDisableSuccessfulFix, setDIsableSuccessfulFix] = useState('true')
  const [isDisableCanellation, setIsDisableCanellation] = useState('true')
  const [totalPrice, setTotalPrice] = useState('')
  const [errorPrice, setErrorPrice] = useState('')

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

  const handleUpdateStatus = (status) => {
    alert("Bạn có muốn cập nhật trạng thái cho đơn đặt lịch này")

    let dataReq = {
      status
    }

    if (status === 'Successful fix') {
      if (detailBooking && detailBooking.total_price === '') {
        if (valueInputRef.current.value === '') {
          setErrorPrice('Bạn cần nhập giá')
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

  return (
    <>
      {error && alert(error)}
      {message && alert(message)}
      {checkMessage()}
      {detailBooking && (
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between rounded-xl  border-b border-gray-200">
          <div className="mb-1 w-full ">
            <div className="px-0">
              <p className="text-[22px] font-medium ">
                Chi tiết đơn đặt lịch #{detailBooking.code_bill}
              </p>
            </div>
            <div className="mt-[30px] text-[14px]">
              <p className="text-gray-600 pb-[5px]">Họ tên: {detailBooking.name}</p>
              <p className="text-gray-600 py-[5px]">Email: {detailBooking.email}</p>
              <p className="text-gray-600 py-[5px]">Số ĐT: {detailBooking.phone}</p>
              <p className="text-gray-600 py-[5px]">
                Địa chỉ: {detailBooking.address}
              </p>
              <p className="text-gray-600 py-[5px]">
                Thời gian sửa:
                <Moment format=" hh:mm DD/MM/YYYY">
                  {detailBooking.require_time}
                </Moment>
              </p>
              <p className="text-gray-600 py-[5px]">Ca sửa: {detailBooking.correction_time}</p>
              <p className="text-gray-600 py-[5px]">
                Lỗi máy: {detailBooking.description_error}
              </p>
              <p className="text-gray-600 py-[5px]">
                Dịch vụ: {detailBooking?.service_id?.name || 'Dịch vụ ảo'}
              </p>
              <p className="text-gray-600 pt-[5px]">
                Trạng thái đơn hàng: {detailBooking.status}
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
              {detailBooking.status === 'Successful fix' && (
                <p className="text-gray-600 pt-[5px]">
                  Thành tiền: {convertNumber(detailBooking.total_price)}đ
                </p>
              )}
            </div>
            <div className="mt-[20px]">
              <button
                className="text-[14px] text-white bg-yellow-400 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableWaitConfirmation === '' ? '1' : '0.3'}` }}
                disabled={isDisableWaitConfirmation}
                onClick={() => handleUpdateStatus('Wait for confirmation')}
              >
                Chờ xác nhận
              </button>
              <button
                className="text-[14px] text-white bg-blue-300 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableConfirm === '' ? '1' : '0.3'}` }}
                disabled={isDisableConfirm}
                onClick={() => handleUpdateStatus('Confirm')}
              >
                Xác nhận
              </button>
              <button
                className="text-[14px] text-white bg-blue-500 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableFixing === '' ? '1' : '0.3'}` }}
                disabled={isDisableFixing}
                onClick={() => handleUpdateStatus('Fixing')}
              >
                Đang sửa
              </button>
              <button
                className="text-[14px] text-white bg-green-400 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableSuccessfulFix === '' ? '1' : '0.3'}` }}
                disabled={isDisableSuccessfulFix}
                onClick={() => handleUpdateStatus('Successful fix')}
              >
                Sửa thành công
              </button>
              <button
                className="text-[14px] text-white bg-red-500 px-[10px] py-[5px] rounded-[5px] mx-[7px]"
                style={{ opacity: `${isDisableCanellation === '' ? '1' : '0.3'}` }}
                disabled={isDisableCanellation}
                onClick={() => handleUpdateStatus('Cancellation of booking')}
              >
                Hủy lịch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookingdetail;
