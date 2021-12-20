const Contact = require("../models/contact.js");
// const moment = require("moment");

exports.createContact = (req, res) => {
  const { userName, phone, address, email, contact, status, user_id } = req.body;
  if (!userName || !phone || !address || !email || !contact || !status || !user_id) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin liên hệ",
    });
  }
  const newContact = new Contact({
    userName,
    phone,
    address,
    email,
    contact,
    status: "handling",
    user_id
  });

  newContact.save((err, contact) => {
    if (err) {
      return res.status(401).json({
        success: false,
        error: "Không thể thêm liên hệ",
      });
    }
    res.status(200).json({
      success: true,
      message: "Gửi liên hệ thành công",
      contact,
    });
  });

  // const { userName, phone, address, email, contact, status, user_id } = req.body;
  // if(!userName || !phone || !address || !email || !contact || !status || !user_id) {
  //   return res.status(401).json({
  //     status: false,
  //     error: "Bạn cần nhập đầy đủ thông tin liên hệ"
  //   })
  // } else {
  //    const contact = new Contact(req.body);
  //    contact.save((err, contact) => {
  //      if(err) {
  //        res.status(402).json({
  //          error: "Không thể thêm liên hệ"
  //        })
  //      }
  //      return res.status(200).json(contact)
  //    })
  // }
}
 

exports.listContact = (req, res) => {
  let page = req.query.page;
  const page_size = 5;
  if (page) {
    page = parseInt(page);
    if (page < 1) {
      page = 1;
    }

    const qtySkip = (page - 1) * page_size;
    Contact.find({})
      .sort({ _id: -1 })
      .skip(qtySkip)
      .limit(page_size)
      .exec((err, contact) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy liên hệ nào",
          });
        }

        Contact.countDocuments({}).then((total) => {
          const totalPage = Math.ceil(total / page_size);

          res.status(200).json({
            success: true,
            message: "Lấy danh sách liên hệ thành công",
            contact,
            totalPage,
          });
        });
      });
  } else {
    Contact.find({})
      .sort({ _id: -1 })
      .exec((err, booking) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy liên hệ nào",
          });
        }
        res.status(200).json({
          success: true,
          message: "Lấy danh sách liên hệ thành công",
          booking
        })
      })
  }
};

exports.detailContact = (req, res) => {
  const id = req.params.id;

  Contact.findById(id, (err, detailContact) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Không tìm thấy liên hệ nào",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lấy chi tiết liên hệ thành công",
      detailContact,
    });
  })
};

exports.updateContactStatusAdmin = async (req, res) => {
  const contactId = req.params.contactId;
  const { status } = req.body;

  const getContactDB = await Contact.findOne({ _id: bookingId });
  let updateContactStatusAdmin;

  switch (status) {
    case 'no process':
      return res.status(401).json({
        success: false,
        message: "Không thể thay đổi trạng thái đơn đặt lịch",
      });
    case 'handling':
      if (getContactDB.status === "no process") {
        updateContactStatusAdmin = {
          status,
          updated_handling: Date.now()
        };

        updateContactStatusAdmin = await Contact.findOneAndUpdate(
          { _id: contactId },
          updateContactStatusAdmin,
          { new: true }
        );

        if (!updateContactStatusAdmin) {
          return res.status(401).json({
            success: false,
            message: "Thay đổi trạng thái liên hệ thất bại",
          });
        }

        res.status(200).json({
          success: true,
          message: "Thay đổi trạng thái liên hệ thành công",
          updateContactStatusAdmin,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Không thể thay đổi trạng thái đơn đặt lịch này",
        })
      }
    default:
      return res.status(400).json({
        success: false,
        error: "Error"
      })
  }
};

exports.listAllContactStatus = (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(401).json({
      success: false,
      message: "Bạn cần nhập đầy đủ thông tin",
    });
  }
  if (
    status === "noprocess" ||
    status === "handling"
  ) {
    Contact.find({ status })
      .sort({ _id: -1 })
      .exec((err, listContactStatus) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Không tìm thấy liên hệ nào"
          })
        }

        res.status(200).json({
          success: true,
          message: "Lấy danh sách liên hệ theo trạng thái thành công",
          listContactStatus,
        });
      });
  } else {
    return res.status(401).json({
      success: false,
      message: "Error"
    });
  }
};