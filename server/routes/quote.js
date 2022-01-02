const express = require('express');
const quoteRouter = express.Router();
const {
    findAll,
    findById,
    softDelete,
    hardDelete,
    update,
    insert
} = require('../controllers/quote')

quoteRouter
    .route("/")
    .get(findAll)
    .post(insert)

quoteRouter
    .route("/:id")
    .get(findById)
    .put(update)
    .delete(softDelete)

quoteRouter
    .route("/hard-delete/:id")
    .delete(hardDelete)

module.exports = quoteRouter