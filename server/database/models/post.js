const mongoose = require('mongoose');
const { PostSchema } = require("../schemas")

const PostModel = mongoose.model("Post", PostSchema)

module.exports = PostModel;