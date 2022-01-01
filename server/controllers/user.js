module.exports.getAll = (req, res) => {
    try {
        res.send({ message: "Call getAll method from UserController" })
    } catch (err) {
        console.log(err);
    }
}