const { UserModel } = require("../database/models")

module.exports.findAll = async (req, res) => {
    try {
        const users = await UserModel.findAll();

        res.json({ users })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findAllPaginated = async (req, res) => {
    try {
        const users = await UserModel.findAllPaginated({ ...req.params });

        res.json({ users })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findAllDeleted = async (req, res) => {
    try {
        const users = await UserModel.findAllDeleted();

        res.json({ users })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findAllWithDeleted = async (req, res) => {
    try {
        const users = await UserModel.findAllWithDeleted();

        res.json({ users })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.findById(id);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}

module.exports.softDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.softDelete(id);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}

module.exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.hardDelete(id);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findByName = async (req, res) => {
    try {
        const { name } = req.params;

        const user = await UserModel.findByName(name);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        const user = await UserModel.findByEmail(email);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const data = { ...req.body }

        const user = await UserModel.update(id, data);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insert = async (req, res) => {
    try {
        const data = { ...req.body }

        const user = await UserModel.register(data);

        res.json({ user })
    } catch (err) {
        console.log(err);
    }
}