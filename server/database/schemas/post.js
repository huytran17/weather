const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { PostEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const PostSchema = new Schema(PostEntity, { timestamp: true })

PostSchema.plugin(mongoose_delete, { overrideMethods: "all" })

module.exports = PostSchema;