const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: String,
  image_blog: String,
  desc_blog: String,
  content_blog: String,
});

module.exports = mongoose.model("Blog", BlogSchema);
