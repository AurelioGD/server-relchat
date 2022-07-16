const { getAllChats } = require("./chatRepository")
const { OK } = require("@consts/responseStates")

const GetPublicChatsController = async (req, res) => {
  const allChats = await getAllChats()
  res.status(OK).json(allChats)
}

module.exports = {
  GetPublicChatsController,
}
