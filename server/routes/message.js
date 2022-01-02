const express = require('express');
const messageRouter = express.Router();
const {
    findAll,
    findById,
    softDelete,
    hardDelete,
    update,
    insert
} = require('../controllers/message')

messageRouter
    .route("/")
    .get(findAll)
    .post(insert)

messageRouter
    .route("/:id")
    .get(findById)
    .put(update)
    .delete(softDelete)

messageRouter
    .route("/hard-delete/:id")
    .delete(hardDelete)

module.exports = messageRouter