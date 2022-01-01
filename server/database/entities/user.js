const UserEntity = {
    username: {
        type: String,
        trim: true,
        minLength: [4, "Tối thiểu 8 ký tự."],
        maxLength: [16, "Tối đa 32 ký tự."],
        required: [true, "Không được để trống."]
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "Đã tồn tại."],
        required: [true, "Không được để trống."]
    },
    password: {
        type: String,
        minLength: [8, "Tối thiểu 8 ký tự."],
        maxLength: [32, "Tối đa 32 ký tự."],
        required: [true, "Không được để trống."]
    },
    avatar_photo_path: {
        type: String,
        default: "",
    },
    gender: {
        type: Number,
        default: 0 //0: male, 1: female, 2: other
    }
}

module.exports = UserEntity;