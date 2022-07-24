const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { MONGO_URI } = require("@config/db")
const { ENVIRONMENT, CLIENT_URL } = require("@config/server")
const apiRoutes = require("@router")

const app = express()

const isDevelopment = ENVIRONMENT === "development"
const corsOptions = {
  origin: isDevelopment ? "*" : `${CLIENT_URL}`,
}

mongoose.connect(MONGO_URI)

app.use(cors(corsOptions))

app.use(apiRoutes)

module.exports = app
