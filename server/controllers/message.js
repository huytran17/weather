const { MessageModel } = require("../database/models")

module.exports.findAll = async (req, res) => {
    try {
        const messages = await MessageModel.findAll();

        res.json({ messages })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findById = async (req, res) => {
    try {
        const { id } = req.params;

        const message = await MessageModel.findById(id);

        res.json({ message })
    } catch (err) {
        console.log(err);
    }
}

module.exports.softDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const message = await MessageModel.softDelete(id);

        res.json({ message })
    } catch (err) {
        console.log(err);
    }
}

module.exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const message = await MessageModel.hardDelete(id);

        res.json({ message })
    } catch (err) {
        console.log(err);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const data = { ...req.body }

        const message = await MessageModel.update(id, data);

        res.json({ message })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insert = async (req, res) => {
    try {
        const data = { ...req.body }

        const message = await MessageModel.register(data);

        res.json({ message })
    } catch (err) {
        console.log(err);
    }
}