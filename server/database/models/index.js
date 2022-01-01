const UserModel = require('./user');
const QuoteModel = require('./quote');
const CommentModel = require('./comment');
const MessageModel = require('./message');
const PostModel = require('./post');
const RoomModel = require('./room');

module.exports = Object.freeze({
    UserModel,
    QuoteModel,
    CommentModel,
    PostModel,
    MessageModel,
    RoomModel
})