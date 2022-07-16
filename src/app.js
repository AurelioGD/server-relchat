const express = require("express")
const mongoose = require("mongoose")
const { MONGO_URI } = require("@config/db")

const apiRoutes = require("@router")

const app = express()

mongoose.connect(MONGO_URI)

app.use(apiRoutes)

module.exports = app
