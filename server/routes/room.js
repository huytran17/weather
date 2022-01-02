const express = require('express');
const roomRouter = express.Router();
const {
    findAll,
    findById,
    findByName,
    findByMember,
    softDelete,
    hardDelete,
    update,
    insert
} = require('../controllers/room')

roomRouter
    .route("/")
    .get(findAll)
    .post(insert)

roomRouter
    .route("/:id")
    .get(findById)
    .put(update)
    .delete(softDelete)

roomRouter
    .route("/by-name/:name")
    .get(findByName)

roomRouter
    .route("/by-member/:id")
    .get(findByMember)

roomRouter
    .route("/hard-delete/:id")
    .delete(hardDelete)

module.exports = roomRouter