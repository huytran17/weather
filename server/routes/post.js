const express = require('express');
const postRouter = express.Router();
const {
    findAll,
    findById,
    findByAuthor,
    softDelete,
    hardDelete,
    update,
    insert
} = require('../controllers/post')

postRouter
    .route("/")
    .get(findAll)
    .post(insert)

postRouter
    .route("/:id")
    .get(findById)
    .delete(softDelete)
    .put(update)

postRouter
    .route("/by-author/:id")
    .get(findByAuthor)

postRouter
    .route("/hard-delete/:id")
    .delete(hardDelete)

module.exports = postRouter;
