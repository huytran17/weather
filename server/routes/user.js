const express = require('express');
const userRouter = express.Router();
const { getAll } = require('../controllers/user')

userRouter.route("/").get(getAll);

module.exports = userRouter;