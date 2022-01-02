const { RoomModel } = require("../database/models")

module.exports.findAll = async (req, res) => {
    try {
        const rooms = await RoomModel.findAll();

        res.json({ rooms })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findById = async (req, res) => {
    try {
        const { id } = req.params;

        const room = await RoomModel.findById(id);

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findByName = async (req, res) => {
    try {
        const { name } = req.params;

        const room = await RoomModel.findByname(id);

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}

module.exports.findByMember = async (req, res) => {
    try {
        const { id } = req.params;

        const room = await RoomModel.findByMember({ member_id: id });

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}

module.exports.softDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const room = await RoomModel.softDelete(id);

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}

module.exports.hardDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const room = await RoomModel.hardDelete(id);

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const data = { ...req.body }

        const room = await RoomModel.update(id, data);

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}

module.exports.insert = async (req, res) => {
    try {
        const data = { ...req.body }

        const room = await RoomModel.register(data);

        res.json({ room })
    } catch (err) {
        console.log(err);
    }
}