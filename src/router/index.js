const { Router } = require("express")
const chatRoutes = require("@components/chat/chatRoutes")

const router = Router()

router.use(chatRoutes)

module.exports = router
