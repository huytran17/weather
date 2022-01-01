const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { PostEntity } = require("../entities")
const { UseMongooseDelete } = require('../../plugins')

const PostSchema = new Schema(PostEntity, { timestamp: true })

UseMongooseDelete(PostSchema, {
    overrideMethods: "all"
})

module.exports = PostSchema;