const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { UserEntity } = require('../entities');
const { UseMongooseDelete } = require('../../plugins')

const UserSchema = new Schema(UserEntity, { timestamp: true })

UseMongooseDelete(UserSchema, {
    overrideMethods: "all"
});

module.exports = UserSchema;