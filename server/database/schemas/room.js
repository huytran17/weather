const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { RoomEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const RoomSchema = new Schema(RoomEntity, { timestamp: true })

RoomSchema.plugin(mongoose_delete, { overrideMethods: "all" })

module.exports = RoomSchema