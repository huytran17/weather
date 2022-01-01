const { UserModel } = require("../database/models")

module.exports.getAll = async (req, res) => {
    try {
        const users = await UserModel.find().exec();

        res.send({ users })
    } catch (err) {
        console.log(err);
    }
}