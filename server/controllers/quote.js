const { QuoteModel } = require("../database/models")

module.exports.findAll = async (req, res) => {
    try {
        const quotes = await QuoteModel.findAll();

        res.json({ quotes })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findById = async (req, res) => {
    try {
        const { id } = req.params;

        const quote = await QuoteModel.findById(id);

        res.json({ quote })
    } catch (err) {
        console.log(err);
    }
}

module.exports.softDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const quote = await QuoteModel.softDelete(id);

        res.json({ quote })
    } catch (err) {
        console.log(err);
    }
}

module.exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const quote = await QuoteModel.hardDelete(id);

        res.json({ quote })
    } catch (err) {
        console.log(err);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const data = { ...req.body }

        const quote = await QuoteModel.update(id, data);

        res.json({ quote })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insert = async (req, res) => {
    try {
        const data = { ...req.body }

        const quote = await QuoteModel.register(data);

        res.json({ quote })
    } catch (err) {
        console.log(err);
    }
}