const Chat = require("@models/Chat")

const getAllChats = async () => {
  const allChats = await Chat.find()
  return allChats
}

module.exports = {
  getAllChats,
}
