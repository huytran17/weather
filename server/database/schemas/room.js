const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { RoomEntity } = require("../entities")
const { UseMongooseDelete } = require("../../plugins/")

const RoomSchema = new Schema(RoomEntity, { timestamp: true })

UseMongooseDelete(RoomSchema, {
    overrideMethods: "all"
})

module.exports = RoomSchema