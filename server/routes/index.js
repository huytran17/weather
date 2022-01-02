const userRouter = require('./user')
const messageRouter = require('./message')
const commentRouter = require('./comment')
const postRouter = require('./post')
const quoteRouter = require('./quote')
const roomRouter = require('./room')

module.exports = (app) => {
    app.use("/api/users", userRouter)
    app.use("/api/messages", messageRouter)
    app.use("/api/comments", commentRouter)
    app.use("/api/posts", postRouter)
    app.use("/api/quotes", quoteRouter)
    app.use("/api/rooms", roomRouter)
}