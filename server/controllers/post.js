const { PostModel } = require("../database/models")

module.exports.findAll = async (req, res) => {
    try {
        const posts = await PostModel.findAll();

        res.json({ posts })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findById = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostModel.findById(id);

        res.json({ post })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findByAuthor = async (req, res) => {
    try {
        const { author_id } = req.params;

        const post = await PostModel.findByAuthor(author_id);

        res.json({ post })
    } catch (err) {
        console.log(err);
    }
}

module.exports.softDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostModel.softDelete(id);

        res.json({ post })
    } catch (err) {
        console.log(err);
    }
}

module.exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostModel.hardDelete(id);

        res.json({ post })
    } catch (err) {
        console.log(err);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const data = { ...req.body }

        const post = await PostModel.update(id, data);

        res.json({ post })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insert = async (req, res) => {
    try {
        const data = { ...req.body }

        const post = await PostModel.register(data);

        res.json({ post })
    } catch (err) {
        console.log(err);
    }
}