const bcrypt = require('bcrypt')

module.exports.encrypt = async ({ plainText, saltRound = 10 }) => {
    try {
        const cypher_text = await bcrypt.hash(plainText, saltRound)

        return cypher_text;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports.compare = async ({ plainText, hash }) => {
    try {
        const result = await bcrypt.compare(plainText, hash);

        return result;
    }
    catch (err) {
        console.error(err);
    }
}