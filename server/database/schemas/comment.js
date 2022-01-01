const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { CommentEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const CommentSchema = new Schema(CommentEntity, { timestamp: true })

CommentSchema.plugin(mongoose_delete, { overrideMethods: "all" })

module.exports = CommentSchema