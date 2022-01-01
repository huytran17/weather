const express = require('express');
const app = express();
const router = require('./routes');

const database = require('./database');

database.connect();

router(app);

app.listen(4000, () => {
    console.log("Server listening on port 4000");
})