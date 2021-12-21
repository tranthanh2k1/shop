const Booking = require("../models/booking.js");
const nodemailer = require("nodemailer");
const moment = require("moment");

exports.create = async (req, res) => {
  const {
    name,
    email,
    address,
    phone,
    user_id,
    repair_time,
    correction_time,
    description_error,
    payment_method,
    service_id,
  } = req.body;
  if (
    !name ||
    !email ||
    !address ||
    !phone ||
    !repair_time ||
    !correction_time ||
    !description_error
  ) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  if (new Date(repair_time).getDate() < new Date(moment()).getDate()) {
    return res.status(401).json({
      success: false,
      message: "Ngày sửa không phù hợp vui lòng chọn lại",
    });
  }

  function makeid() {
    var text = "ACE";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  try {
    const newBooking = new Booking({
      code_bill: makeid(),
      name,
      email,
      address,
      phone,
      repair_time,
      correction_time,
      user_id,
      description_error,
      status: "Wait for confirmation",
      service_id,
      payment_method: payment_method || "unpaid",
    });

    newBooking.save((err, booking) => {
      if (err) {
        console.log("error", err);
        return res.status(401).json({
          success: false,
          message: "Không thể đặt lịch",
        });
      }

      // send email
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });

      let content = "";
      content += `
        <div style="padding: 10px; background-color: #003375">
          <div style="padding: 10px; background-color: white;">
            <h4 style="color: #0085ff">Kính gửi ${name}</h4> <br>
            <span style="color: black">Cảm ơn bạn đã tin tưởng dịch vụ sửa chữa và đặt lịch của cửa hàng sửa chữa laptop ACE</span><br>
            <h4 style="color: #0085ff">Dưới đây là thông tin đơn đặt lịch của bạn</h4><br> 
            <span style="color: black">Mã hóa đơn:${name} </span><br>
            <span style="color: black">Email của bạn:${email} </span><br>
            <span style="color: black">Số điện thoại:${phone} </span><br>
            <span style="color: black">Địa chỉ:${address} </span><br>
            <span style="color: black">Ngày đến sửa:${repair_time} </span><br>
            <span style="color: black">Thời gian đến sửa:${correction_time} </span><br>
            <span style="color: black">Dịch vụ sửa chữa:${service_id.name}</span><br>
            <span style="color: black">Mô tả lỗi của khách hàng:${description_error}</span><br>
            <span style="color: black">Mọi thắc mắc vui lòng liên hệ : 0867682000 hoặc email: nhuhieu21102000@gmail.com</span><br>
          </div>
        </div>
    `;

      let mainOptions = {
        from: "NQH-Test nodemailer",
        to: email,
        subject: "Test Nodemailer",
        html: content,
      };
      transporter.sendMail(mainOptions);

      res.status(200).json({
        success: true,
        message: "Đặt lịch thành công",
        booking,
      });
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
};

exports.updateBookingStatusAdmin = async (req, res) => {
  const bookingId = req.params.bookingId;

  const { status, total_price, exact_error, image_desc_error } = req.body;
  console.log("image", image_desc_error);

  const getBookingDB = await Booking.findOne({ _id: bookingId });

  let updatedStatusBookingAdmin;

  switch (status) {
    case "Wait for confirmation":
      return res.status(401).json({
        success: false,
        message: "Không thể thay đổi trang thái đơn đặt lịch này",
      });
    case "Confirm":
      if (getBookingDB.status === "Wait for confirmation") {
        updatedStatusBookingAdmin = {
          status,
          updated_confirm: Date.now(),
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Thay đổi trạng thái đơn đặt lịch thất bại",
          });
        }

        res.status(200).json({
          success: true,
          message: "Thay đổi trạng thái đơn đặt lịch thành công",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể thay đổi trạng thái đơn đặt lịch này",
        });
      }
    case "Fixing":
      if (getBookingDB.status === "Confirm") {
        updatedStatusBookingAdmin = {
          status,
          exact_error,
          image_desc_error,
          updated_fixing: Date.now(),
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Thay đổi trạng thái đơn đặt lịch thất bại",
          });
        }

        res.status(200).json({
          success: true,
          message: "Thay đổi trạng thái đơn đặt lịch thành công",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể thay đổi trạng thái đơn đặt lịch này",
        });
      }
    case "Successful fix":
      if (!total_price) {
        return res.status(401).json({
          success: false,
          message: "Bạn cần nhập giá",
        });
      }

      if (getBookingDB.status === "Fixing") {
        updatedStatusBookingAdmin = {
          status,
          total_price,
          updated_success: Date.now(),
          payment_method: "paid",
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Thay đổi trạng thái đơn đặt lịch thất bại",
          });
        }

        res.status(200).json({
          success: true,
          message: "Thay đổi trạng thái đơn đặt lịch thành công",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể thay đổi trạng thái đơn đặt lịch này",
        });
      }
    case "Cancellation of booking":
      if (
        getBookingDB.status === "Wait for confirmation" ||
        getBookingDB.status === "Confirm" ||
        getBookingDB.status === "Fixing"
      ) {
        updatedStatusBookingAdmin = {
          status,
          updated_cancel: Date.now(),
        };

        updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
          { _id: bookingId },
          updatedStatusBookingAdmin,
          { new: true }
        );

        if (!updatedStatusBookingAdmin) {
          return res.status(401).json({
            success: false,
            message: "Thay đổi trạng thái đơn đặt lịch thất bại",
          });
        }

        res.status(200).json({
          success: true,
          message: "Thay đổi trạng thái đơn đặt lịch thành công",
          updatedStatusBookingAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể thay đổi trạng thái đơn đặt lịch này",
        });
      }
    default:
      return res.status(400).json({
        success: false,
        message:
          "Không tìm thấy trạng thái nào trùng với trạng thái đơn đặt lịch",
      });
  }
};

exports.listBooking = (req, res) => {
  let page = req.query.page;

  const page_size = 10;

  if (page) {
    page = parseInt(page);
    if (page < 1) {
      page = 1;
    }

    const qtySkip = (page - 1) * page_size;

    Booking.find({})
      .sort({ _id: -1 })
      .skip(qtySkip)
      .limit(page_size)
      .exec((err, booking) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy đơn đặt lịch nào",
          });
        }

        Booking.countDocuments({}).then((total) => {
          const totalPage = Math.ceil(total / page_size);

          res.status(200).json({
            success: true,
            message: "Lấy tất cả danh sách đơn đặt lịch thành công",
            booking,
            totalPage,
          });
        });
      });
  } else {
    Booking.find({})
      .sort({ _id: -1 })
      .exec((err, booking) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy đơn đặt lịch nào",
          });
        }
        res.status(200).json({
          success: true,
          message: "Lấy tất cả danh sách đơn đặt lịch thành công",
          booking,
        });
      });
  }
};

exports.detailBooking = (req, res) => {
  const id = req.params.id;

  Booking.findById(id, (err, detailBooking) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Không tìm thấy đơn đặt lịch nào",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lấy chi tiết đơn đặt lịch thành công",
      detailBooking,
    });
  }).populate("service_id", "name");
};

exports.listAllBookingStatus = (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  if (
    status === "Wait for confirmation" ||
    status === "Confirm" ||
    status === "Fixing" ||
    status === "Successful fix" ||
    status === "Cancellation of booking"
  ) {
    Booking.find({ status })
      .sort({ _id: -1 })
      .exec((err, listBookingStatus) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy đơn hàng nào",
          });
        }

        res.status(200).json({
          success: true,
          message: "Lấy danh sách đơn hàng theo trạng thái thành công",
          listBookingStatus,
        });
      });
  } else {
    return res.status(401).json({
      success: false,
      message: "Không tìm thấy trạng thái nào trùng với đơn hàng",
    });
  }
};

/*
 * Module này sẽ trả về danh sách tất cả đơn đặt lịch của user đó
 */
exports.getListBookingUser = async (req, res) => {
  const user = req.userId;

  Booking.find({ user_id: user._id })
    .sort({ createdAt: -1 })
    .populate("service_id", "name")
    .exec((err, listBooking) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Không tìm thấy đơn đặt lịch nào",
        });
      }

      res.status(200).json({
        success: true,
        message: "Lấy danh sách đơn đặt lịch thành công",
        listBooking,
      });
    });
};

/*
 * Module này sẽ trả về danh sách tất cả đơn đặt lịch của user đó theo trạng thái
 */
exports.getBookingStatusUser = (req, res) => {
  const user = req.userId;

  const status = req.query.status;

  if (
    status === "Wait for confirmation" ||
    status === "Confirm" ||
    status === "Fixing" ||
    status === "Successful fix" ||
    status === "Cancellation of booking"
  ) {
    Booking.find({ status, user_id: user._id })
      .sort({ createdAt: -1 })
      .populate("service_id", "name")
      .exec((err, listBooking) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy đơn đặt lịch nào",
          });
        }

        res.status(200).json({
          success: true,
          message: "Lấy danh sách đơn đặt lịch thành công",
          listBooking,
        });
      });
  } else {
    return res.status(400).json({
      success: false,
      message:
        "Không tìm thấy trạng thái nào trùng với trạng thái đơn đặt lịch",
    });
  }
};

// cancelBooking
exports.cancelBooking = async (req, res) => {
  const user = req.userId;

  const bookingId = req.params.bookingId;

  const getBookingDB = await Booking.findOne({
    _id: bookingId,
    user_id: user._id,
  });

  if (!getBookingDB)
    return res.status(404).json({
      success: false,
      message: "Không tìm thấy booking",
    });

  if (
    getBookingDB.status === "Wait for confirmation" ||
    getBookingDB.status === "Confirm"
  ) {
    let updatedStatusBookingAdmin = {
      status: "Cancellation of booking",
      updated_cancel: Date.now(),
    };
    updatedStatusBookingAdmin = await Booking.findOneAndUpdate(
      { _id: bookingId },
      updatedStatusBookingAdmin,
      { new: true }
    );

    if (!updatedStatusBookingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Cancel booking fail",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cancel booking success",
      updatedStatusBookingAdmin,
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "trạng thái đơn hàng không hợp lệ",
    });
  }
};

exports.searchBookingAdmin = async (req, res) => {
  const search = req.query.code;

  const searchBooking = await Booking.findOne({ code_bill: search });

  if (!searchBooking) {
    return res.status(401).json({
      success: false,
      message: "Không tìm thấy đơn đặt lịch nào",
    });
  }

  res.status(200).json({
    success: true,
    message: "Tìm kiếm đơn đặt lịch thành công",
    searchBooking,
  });
};

exports.filterByDate = (req, res) => {
  const { date } = req.body;

  if (!date) {
    return res.status(400).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  Booking.find({
    createdAt: {
      $gte: new Date(new Date(date).setHours(00, 00, 00)),
      $lt: new Date(new Date(date).setHours(23, 59, 59)),
    },
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "Lấy đơn đặt lịch thành công",
        booking: data,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(401).json({
        success: false,
        message: "Lấy đơn đặt lịch thất bại",
      });
    });
};

exports.revenueByDay = async (req, res) => {
  const { date } = req.body;

  if (!date) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  const booking = await Booking.find({
    updated_success: {
      $gte: new Date(date).setHours(00, 00, 00),
      $lt: new Date(date).setHours(23, 59, 59),
    },
    payment_method: "paid",
  }).sort({ updated_success: 1 });

  if (!booking) {
    return res.status(401).json({
      success: false,
      message: "Lấy đơn đặt lịch thất bại",
    });
  }

  res.status(200).json(booking);
};

exports.revenueByDays = async (req, res) => {
  const { dateStart, dateEnd } = req.body;

  if (!dateStart || !dateEnd) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }

  const booking = await Booking.find({
    updated_success: {
      $gte: new Date(dateStart).setHours(00, 00, 00),
      $lt: new Date(dateEnd).setHours(23, 59, 59),
    },
    payment_method: "paid",
  }).sort({ updated_success: 1 });

  if (!booking) {
    return res.status(401).json({
      success: false,
      message: "Lấy đơn đặt lịch thất bại",
    });
  }

  res.status(200).json(booking);
};

exports.businessResultDay = async (req, res) => {
  const waitBooking = await Booking.find({
    createdAt: {
      $gte: new Date(moment()).setHours(00, 00, 00),
      $lt: new Date(moment()).setHours(23, 59, 59),
    },
  });

  const cancelBooking = await Booking.find({
    status: "Cancellation of booking",
    updated_cancel: {
      $gte: new Date(moment()).setHours(00, 00, 00),
      $lt: new Date(moment()).setHours(23, 59, 59),
    },
  });

  Booking.find({
    status: "Successful fix",
    updated_success: {
      $gte: new Date(moment()).setHours(00, 00, 00),
      $lt: new Date(moment()).setHours(23, 59, 59),
    },
    payment_method: "paid",
  })
    .then((data) => {
      res.status(200).json({
        waitBooking: waitBooking.length,
        cancelBooking: cancelBooking.length,
        totalBookingDay: data,
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

exports.revenueByMonth = async (req, res) => {
  const { month } = req.body;

  const booking = await Booking.find({
    updated_success: {
      $gte: new Date(month + "-01").setHours(00, 00, 00),
      $lt: new Date(month + "-31").setHours(23, 59, 59),
    },
    payment_method: "paid",
  });

  res.status(200).json(booking);
};

exports.searchBookingUser = async (req, res) => {
  const user = req.userId;

  const search = req.query.code;

  if (search) {
    const bookingSearch = await Booking.findOne({
      code_bill: search,
      user_id: user._id,
    });

    if (!bookingSearch) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy đơn đặt lịch nào",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tìm kiếm đơn đặt lịch thành công",
      bookingSearch,
    });
  } else {
    Booking.find({}).exec((err, listBooking) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Không tìm thấy đơn đặt lịch nào",
        });
      }

      res.status(200).json({
        success: true,
        message: "Tìm kiếm đơn đặt lịch thành công",
        listBooking,
      });
    });
  }
};

exports.notificationRepair = (req, res) => {
  Booking.find({
    status: "Confirm",
    repair_time: {
      $gte: new Date(moment()).setHours(00, 00, 00),
      $lt: new Date(moment()).setHours(23, 59, 59),
    },
  }).exec((err, booking) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy đơn nào sửa trong ngày",
      });
    }

    res.status(200).json(booking);
  });
};
