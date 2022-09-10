const { getAllChats, addMemberAChat } = require("./chatRepository")
const { INVALID_REQUEST_RESPONSE, DEFAULT_SUCCESS_RESPONSE, INTERNAL_ERROR_RESPONSE } = require("@consts/responsesDefault")
const { OK, BAD_REQUEST } = require("@consts/responseStates")

const publicChatsController = async (req, res) => {
  const allChats = await getAllChats()
  res.status(OK).json(allChats)
}

const chatMembersController = async (req, res) => {
  const { chatId } = req.params
  const { memberId }  = req.body

  if(!chatId || !memberId) return res.status(BAD_REQUEST).json(INVALID_REQUEST_RESPONSE)

  try {
    const result = await addMemberAChat(chatId, memberId)
    res.status(OK).json({...DEFAULT_SUCCESS_RESPONSE})
  } catch (error) {
    res.status(BAD_REQUEST).json(INTERNAL_ERROR_RESPONSE)
  }
  
}

module.exports = {
  publicChatsController,
  chatMembersController
}
