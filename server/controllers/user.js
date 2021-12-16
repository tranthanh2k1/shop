const User = require("../models/user.js");

exports.listUser = (req, res) => {
  let page = req.query.page;

  const page_size = 10;

  if (page) {
    page = parseInt(page);
    if (page < 1) {
      page = 1;
    }

    const qtySkip = (page - 1) * page_size;

    User.find({})
      .sort({ _id: -1 })
      .skip(qtySkip)
      .limit(page_size)
      .exec((err, user) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Không tìm thấy người dùng nào",
          });
        }

        User.countDocuments({}).then((total) => {
          const totalPage = Math.ceil(total / page_size);

          res.status(200).json({
            success: true,
            message: "Lấy tất cả danh sách đơn đặt lịch thành công",
            user,
            totalPage,
          });
        });
      });
  } else {
    User.find({}).exec((err, user) => {
      if (err || !user) {
        return res.status(401).json({
          success: false,
          message: "Không tìm thấy người dùng nào",
        });
      }

      res.status(200).json({
        success: true,
        message: "Lấy danh sách người dùng thành công",
        user,
      });
    });
  }
};
