const express = require("express");
const mongoose = require('mongoose');
const { MONGO_URI } = require("@config/db")

const app = express();

mongoose.connect(MONGO_URI);

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>")
})

module.exports = app;
