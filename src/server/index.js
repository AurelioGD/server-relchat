require('dotenv').config();
require("module-alias/register")

const app = require("@src/app")

const { SERVER_PORT } = require("@config/server")

const server = app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`)
})

module.exports = server