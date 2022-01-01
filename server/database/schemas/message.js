const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MessageEntity } = require("../entities")
const { UseMongooseDelete } = require("../../plugins/")

const MessageSchema = new Schema(MessageEntity);

UseMongooseDelete(MessageSchema, {
    overrideMethods: "all"
})

module.exports = MessageSchema