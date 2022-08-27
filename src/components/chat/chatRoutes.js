const { Router } = require("express")
const { GetPublicChatsController } = require("./chatControllers")
const ROUTES = require("@consts/routes")

const { PUBLIC_CHATS } = ROUTES

const router = Router()

router.get(PUBLIC_CHATS, GetPublicChatsController)

module.exports = router
