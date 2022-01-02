const express = require('express');
const userRouter = express.Router();
const {
    findAll,
    findById,
    update,
    findAllPaginated,
    findByEmail,
    findByName,
    findAllDeleted,
    findAllWithDeleted,
    register,
    softDelete,
    hardDelete
} = require('../controllers/user')

userRouter
    .route("/")
    .get(findAll)
    .post(register);

userRouter
    .route("/paginated")
    .get(findAllPaginated);

userRouter
    .route("/all-deleted")
    .get(findAllDeleted);

userRouter
    .route("/all-with-deleted")
    .get(findAllWithDeleted);

userRouter
    .route("/:id")
    .get(findById)
    .put(update)
    .delete(softDelete);

userRouter
    .route("/by-name/:name")
    .get(findByName);

userRouter
    .route("/by-email/:email")
    .get(findByEmail);

userRouter
    .route("/hard-delete/:id")
    .delete(hardDelete);



module.exports = userRouter;