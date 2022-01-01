const PostEntity = {
    title: {
        type: String,
        trim: true,
        required: [true, "Không được để trống."]
    },
    description: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: [true, "Không được để trống."]
    }
}

module.exports = PostEntity;