const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MessageEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const MessageSchema = new Schema(MessageEntity);

MessageSchema.plugin(mongoose_delete, { overrideMethods: "all" })

module.exports = MessageSchema