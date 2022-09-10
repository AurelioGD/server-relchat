const { Router } = require("express")
const { publicChatsController, chatMembersController } = require("./chatControllers")
const ROUTES = require("@consts/routes")

const { CHAT } = ROUTES
const { PUBLIC_CHATS, MEMBERS } = CHAT

const router = Router()

router.get(PUBLIC_CHATS, publicChatsController)
router.post(MEMBERS, chatMembersController)

module.exports = router
