const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MessageEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const MessageSchema = new Schema(MessageEntity);

MessageSchema.plugin(mongoose_delete, { overrideMethods: "all" })

MessageSchema.statics.findAll = async function () {
    try {
        const messages =
            await this.find()
                .populate({
                    path: "author",
                    select: "-__v"
                })
                .populate({
                    path: "room_id",
                    select: "-__v",
                    populate: { path: "members", select: "-__v" },
                    populate: { path: "createdBy", select: "-__v" }
                })
                .sort({ createdAt: "desc" })
                .lean({ virtuals: true })

        return messages
    }
    catch (err) {
        console.error(err);
    }
}

MessageSchema.statics.findById = async function (id) {
    try {
        const message =
            await this.findOne({ id })
                .exec();

        return message;
    }
    catch (err) {
        console.error(err);
    }
}

MessageSchema.statics.softDelete = async function (id) {
    try {
        const message =
            await this.find({ id })
                .delete()
                .exec();

        return message;
    }
    catch (err) {
        console.error(err);
    }
}

MessageSchema.statics.hardDelete = async function (id) {
    try {
        const message =
            await this.deleteOne({ id })
                .exec();

        return message;
    }
    catch (err) {
        console.error(err);
    }
}

MessageSchema.statics.update = async function (id, data) {
    try {
        const message =
            await this.findByIdAndUpdate(id, data, {
                new: true
            })
                .exec();

        return message;
    }
    catch (err) {
        console.error(err);
    }
}

MessageSchema.statics.insert = async function (data) {
    try {
        const message =
            await new this(data)
                .save();

        return message;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = MessageSchema