const Chat = require("@models/Chat")

const getAllChats = async () => {
  const allChats = await Chat.find()
  return allChats
}

const addMemberAChat = async (chatId, newMemberId) => {
  const res = await Chat.updateOne({_id: chatId}, {$push:{members: newMemberId}})
  return res
}

module.exports = {
  getAllChats,
  addMemberAChat
}
