const express = require("express");
const {
  create,
  updateBookingStatusAdmin,
  getBookingStatusUser,
  getListBookingUser,
  listBooking,
  detailBooking,
  cancelBooking,
  listAllBookingStatus,
  searchBookingUser,
  searchBookingAdmin,
  filterByDate,
  revenueByDay,
  revenueByDays,
  businessResultDay,
} = require("../controllers/booking.js");
const { verifyToken, isAdmin } = require("../middleware/auth.js");
const router = express.Router();

// api admin
router.get("/booking", listBooking);
router.get("/booking/detail/:id", detailBooking);
router.put(
  "/booking/updateStatus/:bookingId",
  verifyToken,
  isAdmin,
  updateBookingStatusAdmin
);
// router.post("/booking/status", listAllBookingStatus);
router.post("/booking/status", listAllBookingStatus);
router.get("/booking/admin/search", verifyToken, isAdmin, searchBookingAdmin);
router.post("/booking/filterByDate", filterByDate);
router.get("/booking/admin/revenueByDay", revenueByDay);
router.get("/booking/admin/revenueByDays", revenueByDays);
router.get("/booking/admin/businessResultDay", businessResultDay);

// api user
router.post("/booking", create);
router.get("/booking/cancel/:bookingId", verifyToken, cancelBooking);
router.get("/booking/user", verifyToken, getListBookingUser);
router.get("/booking/user/status", verifyToken, getBookingStatusUser);

module.exports = router;
