const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomEntity = {
    name: {
        type: String,
        trim: true,
        required: [true, "Không được để trống."]
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Không được để trống."]
    }],
}

module.exports = RoomEntity;