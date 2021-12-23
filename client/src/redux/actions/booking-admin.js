import axios from "axios";
import {
  detailBookingApi,
  listAllApi,
  updateStatusAdminApi,
  listAllBookingStatusApi,
} from "../../api/booking";
import { API } from "../../constant";

export const getListBookingAll = (page) => async (dispatch) => {
  const data = await listAllApi(page);

  if (data.success) {
    dispatch({
      type: "LIST_ALL_BOOKING",
      payload: { data: data.booking, totalPage: data.totalPage },
    });
  }
};

export const detaiBookingAction = (id) => async (dispatch) => {
  const data = await detailBookingApi(id);

  dispatch({
    type: "DETAIL_BOOKING",
    payload: data.detailBooking,
  });
};

export const updateStatusBookingAdminAction =
  (dataReq, id) => async (dispatch) => {
    const data = await updateStatusAdminApi(dataReq, id);

    if (data.success) {
      if (localStorage.getItem("image_error") !== "underfine") {
        localStorage.removeItem("image_error");
      }

      dispatch({
        type: "UPDATED_STATUS_BOOKING_ADMIN",
        payload: {
          data: data.updatedStatusBookingAdmin,
          message: data.message,
        },
      });
    } else {
      dispatch({
        type: "UDATED_STATUS_BOOKING_API_FAIL",
        payload: data.message,
      });
    }
  };

export const listAllBookingStatusAction = (status) => async (dispatch) => {
  const data = await listAllBookingStatusApi(status);

  if (data.success) {
    dispatch({
      type: "LIST_ALL_BOOKING_STATUS",
      payload: data.listBookingStatus,
    });
  } else {
    dispatch({
      type: "UDATED_STATUS_BOOKING_API_FAIL",
      payload: data.message,
    });
  }
};

export const adminFilterByDateBookingAction = (date) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API}/booking/filterByDate`, { date });

    dispatch({
      type: "FILTER_DATE_BOOKING",
      payload: data.booking,
    });
  } catch (error) {
    console.log("error", error.response);
    dispatch({
      type: "UDATED_STATUS_BOOKING_API_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const todayBookingRepair = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API}/booking/admin/notificationRepair`);

    dispatch({
      type: "TODAY_BOOKING_REPAIR",
      payload: data,
    });
  } catch (error) {
    console.log("error", error.response);
  }
};
