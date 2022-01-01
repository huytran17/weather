const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QuoteEntity } = require('../entities')
const mongoose_delete = require('mongoose-delete')

const QuoteSchema = new Schema(QuoteEntity, { timestamp: true });

QuoteSchema.plugin(mongoose_delete, { overrideMethods: "all" })

module.exports = QuoteSchema;