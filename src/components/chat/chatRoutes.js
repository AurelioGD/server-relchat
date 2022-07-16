const { Router } = require("express")
const { GetPublicChatsController } = require("./chatControllers")

const router = Router()

router.get("/public/chats", GetPublicChatsController)

module.exports = router
