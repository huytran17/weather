const mongoose = require('mongoose');
const { QuoteSchema } = require('../schemas')

const QuoteModel = mongoose.model("Quote", QuoteSchema);

module.exports = QuoteModel;