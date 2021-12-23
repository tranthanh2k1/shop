const Blog = require("../models/blog.js");

exports.createBlog = (req, res) => {
  const { title, content_blog, image_blog, desc_blog } = req.body;

  const newBlog = new Blog({
    title,
    content_blog,
    image_blog,
    desc_blog,
  });

  newBlog.save((err, data) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Không tạo được bài viết",
      });
    }

    res.status(200).json(data);
  });
};

exports.listBlog = (req, res) => {
  Blog.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.detailBlog = (req, res) => {
  const blogId = req.params.id;

  Blog.findOne({ _id: blogId }).exec((err, blog) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy bài viết",
      });
    }

    res.status(200).json(blog);
  });
};

exports.removeBlog = async (req, res) => {
  const removeBlog = await Blog.findByIdAndDelete(req.params.blogId).catch(
    (err) => {
      console.log("error", err);
      res.status(401).json({
        success: false,
        messsage: "Không tìm thấy bài viết nào",
      });
    }
  );

  res.status(200).json(removeBlog);
};
