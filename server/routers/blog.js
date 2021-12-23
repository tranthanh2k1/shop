const express = require("express");
const {
  createBlog,
  listBlog,
  removeBlog,
  detailBlog,
} = require("../controllers/blog");

const router = express.Router();

router.post("/blog/create", createBlog);
router.get("/blog/list", listBlog);
router.get("/blog/detail/:id", detailBlog);
router.delete("/blog/delete/:blogId", removeBlog);

module.exports = router;
