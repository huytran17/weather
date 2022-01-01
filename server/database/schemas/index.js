const UserSchema = require('./user')
const QuoteSchema = require('./quote')
const PostSchema = require('./post')
const MessageSchema = require('./message')
const CommentSchema = require('./comment')
const RoomSchema = require('./room')

module.exports = Object.freeze({
    UserSchema,
    QuoteSchema,
    PostSchema,
    CommentSchema,
    RoomSchema,
    MessageSchema
})