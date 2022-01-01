const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

module.exports.connect = () => {
    const uri_connect = process.env.DATABASE_URI;
    
    const connect_options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    mongoose.connect(uri_connect, connect_options)

    const database = mongoose.connection;

    database.on('error', function (err) {
        if (err) {
            console.error(err)
            return;
        }
    });

    database.once('open', function () {
        console.log("Connect to database successfully!");
    });
}