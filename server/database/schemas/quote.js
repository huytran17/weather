const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QuoteEntity } = require('../entities')
const mongoose_delete = require('mongoose-delete')

const QuoteSchema = new Schema(QuoteEntity, { timestamp: true });

QuoteSchema.plugin(mongoose_delete, { overrideMethods: "all" })

QuoteSchema.statics.findAll = async function () {
    try {
        const quotes =
            await this.find()
                .sort({ createdAt: "desc" })
                .lean({ virtuals: true })

        return quotes
    }
    catch (err) {
        console.error(err);
    }
}

QuoteSchema.statics.findById = async function (id) {
    try {
        const quote =
            await this.findOne({ id })
                .exec();

        return quote;
    }
    catch (err) {
        console.error(err);
    }
}

QuoteSchema.statics.softDelete = async function (id) {
    try {
        const quote =
            await this.find({ id })
                .delete()
                .exec();

        return quote;
    }
    catch (err) {
        console.error(err);
    }
}

QuoteSchema.statics.hardDelete = async function (id) {
    try {
        const quote =
            await this.deleteOne({ id })
                .exec();

        return quote;
    }
    catch (err) {
        console.error(err);
    }
}

QuoteSchema.statics.update = async function (id, data) {
    try {
        const quote =
            await this.findByIdAndUpdate(id, data, {
                new: true
            })
                .exec();

        return quote;
    }
    catch (err) {
        console.error(err);
    }
}

QuoteSchema.statics.insert = async function (data) {
    try {
        const quote =
            await new this(data)
                .save();

        return quote;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = QuoteSchema;