const mongoose = require('mongoose');
const { RoomSchema } = require("../schemas")

const RoomModel = mongoose.model("Room", RoomSchema)

module.exports = RoomModel;