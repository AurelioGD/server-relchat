require("dotenv").config()
require("module-alias/register")

const app = require("@src/app")
const http = require("http")
const setupIo = require("@sockets/setupIo")
const socketEntryPoint = require("@sockets/socketEntryPoint")
const { SERVER_PORT } = require("@config/server")

const server = http.createServer(app)

const io = setupIo(server)
socketEntryPoint(io)

server.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`)
})
