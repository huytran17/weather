const { CommentModel } = require("../database/models")

module.exports.findAll = async (req, res) => {
    try {
        const comments = await CommentModel.findAll();

        res.json({ comments })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findById = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await CommentModel.findById(id);

        res.json({ comment })
    } catch (err) {
        console.log(err);
    }
}

module.exports.softDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await CommentModel.softDelete(id);

        res.json({ comment })
    } catch (err) {
        console.log(err);
    }
}

module.exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await CommentModel.hardDelete(id);

        res.json({ comment })
    } catch (err) {
        console.log(err);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const data = { ...req.body }

        const comment = await CommentModel.update(id, data);

        res.json({ comment })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insert = async (req, res) => {
    try {
        const data = { ...req.body }

        const comment = await CommentModel.register(data);

        res.json({ comment })
    } catch (err) {
        console.log(err);
    }
}