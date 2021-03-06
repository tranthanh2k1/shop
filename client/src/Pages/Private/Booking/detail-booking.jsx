// import React, { useEffect, useState } from 'react'

// import { useHistory, useParams } from 'react-router-dom'
// import Moment from 'react-moment';
// import { useDispatch, useSelector } from 'react-redux';
// import { detaiBookingAction, updateStatusBookingAdminAction } from '../../../redux/actions/booking-admin';

// const DetailBookingPage = () => {
//     const [isDisableWaitConfirmation, setIsDisableWaitConfirmation] = useState('true')
//     const [isDisableConfirm, setIsDisableConfirm] = useState('true')
//     const [isDisableFixing, setIsDisableFixing] = useState('true')
//     const [isDisableSuccessfulFix, setDIsableSuccessfulFix] = useState('true')
//     const [isDisableCanellation, setIsDisableCanellation] = useState('true')

//     const { id } = useParams()

//     const { detailBooking, message, error } = useSelector(state => state.bookingAdmin)

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(detaiBookingAction(id))
//     }, [])

//     useEffect(() => {
//         if (detailBooking && detailBooking.status === "Wait for confirmation") {
//             // setIsDisableWaitConfirmation('')
//             setIsDisableConfirm('')
//             setIsDisableCanellation('')
//         }

//         if (detailBooking && detailBooking.status === "Confirm") {
//             // setIsDisableConfirm('')
//             setIsDisableFixing('')
//             setIsDisableCanellation('')
//         }
//         if (detailBooking && detailBooking.status === "Fixing") {
//             // setIsDisableFixing('')
//             setDIsableSuccessfulFix('')
//             setIsDisableCanellation('')
//         }
//         if (detailBooking && detailBooking.status === "Successful fix") {
//             setDIsableSuccessfulFix('')
//         }
//         if (detailBooking && detailBooking.status === "Cancellation of booking") {
//             setIsDisableCanellation('')
//         }

//     }, [detailBooking, isDisableWaitConfirmation, isDisableConfirm, isDisableFixing, isDisableSuccessfulFix, isDisableCanellation])

//     const handleUpdateStatus = (status) => {
//         alert("B???n c?? mu???n c???p nh???t tr???ng th??i cho ????n ?????t l???ch n??y")

//         const dataReq = {
//             status
//         }

//         dispatch(updateStatusBookingAdminAction(dataReq, id))
//     }

//     const history = useHistory()

//     const checkMessage = () => {
//         if (message) {
//             history.push('/admin/booking/list')
//         }
//     }

//     return (
//         <div>
//             {error && alert(error)}
//             {message && alert(message)}
//             {checkMessage()}
//             {detailBooking && (
//                 <>
//                     <h3 className='admin__page-title'>Chi ti???t ????n ?????t l???ch #{detailBooking.code_bill}</h3>
//                     <p>T??n ng?????i d??ng: {detailBooking.name}</p>
//                     <p>Email: {detailBooking.email}</p>
//                     <p>S??? ??i???n tho???i: {detailBooking.phone}</p>
//                     <p>?????a ch???: {detailBooking.address}</p>
//                     <p>Th???i gian s???a:
//                         <Moment format=" hh:mm DD/MM/YYYY">
//                             {detailBooking.require_time}
//                         </Moment>
//                     </p>
//                     <p>Ca s???a: {detailBooking.correction_time}</p>
//                     <p>M?? t??? l???i c???a m??y: {detailBooking.description_error}</p>
//                     <p>Tr???ng th??i: {detailBooking.status}</p>
//                 </>
//             )}
//             <button
//                 className='btn-booking-status-admin'
//                 style={{ backgroundColor: '#fcaf17', color: '#fff', opacity: `${isDisableWaitConfirmation === '' ? '1' : '0.3'}` }}
//                 disabled={isDisableWaitConfirmation}
//                 onClick={() => handleUpdateStatus('Wait for confirmation')}
//             >
//                 Ch??? x??c nh???n
//             </button>
//             <button
//                 className='btn-booking-status-admin'
//                 style={{ backgroundColor: '#45aaf2', color: '#fff', opacity: `${isDisableConfirm === '' ? '1' : '0.3'}` }}
//                 disabled={isDisableConfirm}
//                 onClick={() => handleUpdateStatus('Confirm')}
//             >
//                 X??c nh???n
//             </button>
//             <button
//                 className='btn-booking-status-admin'
//                 style={{ backgroundColor: '#2980b9', color: '#fff', opacity: `${isDisableFixing === '' ? '1' : '0.3'}` }}
//                 disabled={isDisableFixing}
//                 onClick={() => handleUpdateStatus('Fixing')}
//             >
//                 ??ang s???a
//             </button>
//             <button
//                 className='btn-booking-status-admin'
//                 style={{ backgroundColor: '#27ae60', color: '#fff', opacity: `${isDisableSuccessfulFix === '' ? '1' : '0.3'}` }}
//                 disabled={isDisableSuccessfulFix}
//                 onClick={() => handleUpdateStatus('Successful fix')}
//             >
//                 S???a th??nh c??ng
//             </button>
//             <button
//                 className='btn-booking-status-admin'
//                 style={{ backgroundColor: '#ee4d2d', color: '#fff', opacity: `${isDisableCanellation === '' ? '1' : '0.3'}` }}
//                 disabled={isDisableCanellation}
//                 onClick={() => handleUpdateStatus('Cancellation of booking')}
//             >
//                 H???y l???ch
//             </button>
//         </div>
//     )
// }

// export default DetailBookingPage
