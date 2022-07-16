const { Server } = require("socket.io")

const setupIo = (server) => {
  const io = new Server(server)
  return io
}

module.exports = setupIo
