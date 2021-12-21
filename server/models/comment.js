const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;
const commentSchema = new Schema(
    {
        contentComment: {
            type: String,
            trim: true,
            required: true,
        },
        userId: {
            type: ObjectId,
            ref: "User",
            required: true,
            trim :true
        }  
    }, {timestamps: true})
module.exports = mongoose.model("Comment", commentSchema)