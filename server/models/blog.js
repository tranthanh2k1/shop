const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    content_blog: String,
});

module.exports = mongoose.model("Blog", BlogSchema);
