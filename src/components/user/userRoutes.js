const { Router } = require("express")
const createUserController = require("./userControllers")

const router = Router()

router.post("/user", createUserController)

module.exports = router