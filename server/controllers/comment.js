const { Comment } = require("../models/comment.js");

exports.create = (req, res) => {
    const {contentComment, userId} = req.body;
    if (!contentComment || !userId) {
        return res.status(400).json({
            status: false,
            message: "bạn cần nhập đầy đủ trường !"
        })
    }
    const comment = new Comment(req.body);
    comment.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: "thêm thất bại"
            })
        }
        res.status(200).json(data)
    })
    // const comment = new Comment(req.body);
    // comment.save((err, data) => {
    //     if(err) {
    //         return res.status(400).json({
    //             error: "Error"
    //         })
    //     }
    //     return res.status(200).json(data);
    // })
}

exports.list = (req, res) => {
    Comment.find((err, data) => {
        if(err) {
            return res.status(400).json({
                err: "Lỗi"
            })
        }
        return res.status(200).json(data)
    })
}

exports.commentId = (req, res, next, id) => {
    Comment.findById(id).exec((err, data) => {
        if(err) {
            return res.status(400).json({
                err: "Error"
            })
        }
        req.comment = data;
        next();
    })
}

exports.update = (req, res) => {
    let comment = req.comment;
    comment = _.assignIn(comment, req.body);

    comment.save((err, comment) => {
        if(err) {
            return res.status(401).json({
                status: false,
                message: "Error"
            })
        }
        return res.json(comment);
    })
}

exports.remove = (req, res) => {
    let comment = req.comment;
    comment.remove((err, comment) => {
        if(err) {
            return res.status(400).json({
                status: false,
                error: "Không thể xoá comment"
            });
        }
        return res.status(200).json({
            status : true,
            message: 'Xoá thành công',
            comment
        })
    })
}