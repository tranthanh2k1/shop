const { listenerCount } = require("npmlog")
const Blog = require("../models/blog.js")

exports.createBlog = (req, res) => {
    const { title, content_blog } = req.body

    const newBlog = new Blog({
        title, content_blog
    })

    newBlog.save((err, data) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "Không tạo được bài viết"
            })
        }

        res.status(200).json(data)
    })
}

exports.listBlog = (req, res) => {
    Blog.find({}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log("err", err)
    })
}

exports.removeBlog = async (req, res) => {
    const { blogId } = req.params

    const removeBlog = await Blog.find({ _id: blogId })

    if (!removeBlog) {
        return res.status(401).json({
            success: false,
            messsage: "Không tìm thấy bài viết nào"
        })
    }

    removeBlog.remove()

    res.status(200).json(removeBlog)
}

