const path = require('path');
const express = require('express');
const cors = require('cors');
const { extname } = require('path');

const app = express();
const port = 3000;
//const route = require('./routes/index.route');

const db = require('./db/index.db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "MH dep chai"});
});

// Routes init
//route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});