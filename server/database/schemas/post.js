const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { PostEntity } = require("../entities")
const mongoose_delete = require('mongoose-delete')

const PostSchema = new Schema(PostEntity, { timestamp: true })

PostSchema.plugin(mongoose_delete, { overrideMethods: "all" })

PostSchema.statics.findAll = async function () {
    try {
        const posts =
            await this.find()
                .populate("author", "-__v")
                .sort({ createdAt: "desc" })
                .lean({ virtuals: true })

        return posts
    }
    catch (err) {
        console.error(err);
    }
}

PostSchema.statics.findById = async function (id) {
    try {
        const post =
            await this.findOne({ id })
                .populate("author", "-__v")
                .exec();

        return post;
    }
    catch (err) {
        console.error(err);
    }
}

PostSchema.statics.softDelete = async function (id) {
    try {
        const post =
            await this.find({ id })
                .delete()
                .exec();

        return post;
    }
    catch (err) {
        console.error(err);
    }
}

PostSchema.statics.hardDelete = async function (id) {
    try {
        const post =
            await this.deleteOne({ id })
                .exec();

        return post;
    }
    catch (err) {
        console.error(err);
    }
}

PostSchema.statics.update = async function (id, data) {
    try {
        const post =
            await this.findByIdAndUpdate(id, data, {
                new: true
            })
                .populate("author", "-__v")
                .exec();

        return post;
    }
    catch (err) {
        console.error(err);
    }
}

PostSchema.statics.insert = async function (data) {
    try {
        const post =
            await new this(data)
                .populate("author", "-__v")
                .save();

        return post;
    }
    catch (err) {
        console.error(err);
    }
}

PostSchema.statics.findByAuthor = async function (author_id) {
    try {
        const post =
            await this.find({
                "author.$id": author_id
            })
                .populate("author", "-__v")
                .exec();

        return post;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = PostSchema;