const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { CommentEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const CommentSchema = new Schema(CommentEntity, { timestamp: true })

CommentSchema.plugin(mongoose_delete, { overrideMethods: "all" })

CommentSchema.statics.findAll = async function () {
    try {
        const comments =
            await this.find()
                .populate({
                    path: "author",
                    select: "-__v"
                })
                .populate({
                    path: "post_id",
                    select: "-__v"
                })
                .populate({
                    path: "replies",
                    select: "-__v",
                    populate: { path: "author", select: "-__v" }
                })
                .sort({ createdAt: "desc" })
                .lean({ virtuals: true })

        return comments
    }
    catch (err) {
        console.error(err);
    }
}

CommentSchema.statics.findById = async function (id) {
    try {
        const comment =
            await this.findOne({ id })
                .populate({
                    path: "author",
                    select: "-__v"
                })
                .populate({
                    path: "post_id",
                    select: "-__v"
                })
                .populate({
                    path: "replies",
                    select: "-__v",
                    populate: { path: "author", select: "-__v" }
                })
                .exec();

        return comment;
    }
    catch (err) {
        console.error(err);
    }
}

CommentSchema.statics.softDelete = async function (id) {
    try {
        const comment =
            await this.find({ id })
                .delete()
                .exec();

        return comment;
    }
    catch (err) {
        console.error(err);
    }
}

CommentSchema.statics.hardDelete = async function (id) {
    try {
        const comment =
            await this.deleteOne({ id })
                .exec();

        return comment;
    }
    catch (err) {
        console.error(err);
    }
}

CommentSchema.statics.update = async function (id, data) {
    try {
        const comment =
            await this.findByIdAndUpdate(id, data, {
                new: true
            })
                .populate({
                    path: "author",
                    select: "-__v"
                })
                .populate({
                    path: "post_id",
                    select: "-__v"
                })
                .populate({
                    path: "replies",
                    select: "-__v",
                    populate: { path: "author", select: "-__v" }
                })
                .exec();

        return comment;
    }
    catch (err) {
        console.error(err);
    }
}

CommentSchema.statics.insert = async function (data) {
    try {
        const comment =
            await new this(data)
                .populate({
                    path: "author",
                    select: "-__v"
                })
                .populate({
                    path: "post_id",
                    select: "-__v"
                })
                .populate({
                    path: "replies",
                    select: "-__v",
                    populate: { path: "author", select: "-__v" }
                })
                .save();

        return comment;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = CommentSchema