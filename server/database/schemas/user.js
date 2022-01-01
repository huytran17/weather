const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { UserEntity } = require('../entities');
const UseMongooseDelete = require('../../plugins')

const UserShema = new Schema(UserEntity, { timestamp: true })

UseMongooseDelete(UserShema, {
    overrideMethods: "all"
});

module.exports = UserShema;