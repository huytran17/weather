const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { CommentEntity } = require("../entities")
const { UseMongooseDelete } = require('../../plugins')

const CommentSchema = new Schema(CommentEntity, { timestamp: true })

UseMongooseDelete(CommentSchema, {
    overrideMethods: "all"
})

module.exports = CommentSchema