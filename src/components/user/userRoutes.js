const { Router } = require("express")
const createUserController = require("./userControllers")
const ROUTES = require("@consts/routes")

const { USER } = ROUTES

const router = Router()

router.post(USER, createUserController)

module.exports = router