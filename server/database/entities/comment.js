const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentEntity = {
    content: {
        type: String,
        trim: true,
        require: [true, "Không được để trống."]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: [true, "Không được để trống."]
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        require: [true, "Không được để trống."]
    },
    replies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    meta: {
        likes: {
            type: Number,
            default: 0
        }
    },
}

module.exports = CommentEntity;