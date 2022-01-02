const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { RoomEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const RoomSchema = new Schema(RoomEntity, { timestamp: true })

RoomSchema.plugin(mongoose_delete, { overrideMethods: "all" })

RoomSchema.statics.findAll = async function () {
    try {
        const rooms =
            await this.find()
                .populate("members", "-__v")
                .populate("createdBy", "-__v")
                .sort({ createdAt: "desc" })
                .lean({ virtuals: true })

        return rooms
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.findById = async function (id) {
    try {
        const room =
            await this.findOne({ id })
                .populate("members", "-__v")
                .populate("createdBy", "-__v")
                .exec();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.findByName = async function (name) {
    try {
        const room =
            await this.findOne({ name })
                .populate("members", "-__v")
                .populate("createdBy", "-__v")
                .exec();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.findByMember = async function (member_id) {
    try {
        const room =
            await this.find({ members: member_id })
                .populate("members", "-__v")
                .populate("createdBy", "-__v")
                .exec();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.softDelete = async function (id) {
    try {
        const room =
            await this.find({ id })
                .delete()
                .exec();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.hardDelete = async function (id) {
    try {
        const room =
            await this.deleteOne({ id })
                .exec();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.update = async function (id, data) {
    try {
        const room =
            await this.findByIdAndUpdate(id, data, {
                new: true
            })
                .populate("members", "-__v")
                .populate("createdBy", "-__v")
                .exec();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

RoomSchema.statics.insert = async function (data) {
    try {
        const room =
            await new this(data)
                .populate("members", "-__v")
                .populate("createdBy", "-__v")
                .save();

        return room;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = RoomSchema