const mongoose = require('mongoose');
const { MessageSchema } = require("../schemas")

const MessageModel = mongoose.model("Message", MessageSchema)

module.exports = MessageModel