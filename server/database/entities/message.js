const MessageEntity = {
    content: {
        type: String,
        trim: true,
        required: [true, "Không được để trống."]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Không được để trống."]
    },
    room_id: {
        type: Schema.Types.ObjectId,
        ref: "Room",
        required: [true, "Không được để trống."]
    }
}

module.exports = MessageEntity