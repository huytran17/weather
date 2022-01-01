const mongoose = require('mongoose');
const { CommentSchema } = require('../schemas')

const CommentModel = mongoose.model("Comment", CommentSchema)

module.exports = CommentModel