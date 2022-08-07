const { Router } = require("express")
const chatRoutes = require("@components/chat/chatRoutes")
const userRoutes = require("@components/user/userRoutes")

const router = Router()

router.use(chatRoutes)
router.use(userRoutes)

module.exports = router
