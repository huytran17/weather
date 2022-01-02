const express = require('express');
const commentRouter = express.Router();
const {
    findAll,
    findById,
    softDelete,
    hardDelete,
    update,
    insert
} = require('../controllers/comment')

commentRouter
    .route("/")
    .get(findAll)
    .post(insert)

commentRouter
    .route("/:id")
    .get(findById)
    .put(update)
    .delete(softDelete)

commentRouter
    .route("/hard-delete/:id")
    .delete(hardDelete)

module.exports = commentRouter