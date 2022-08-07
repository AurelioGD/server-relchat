const { isEmail } = require("@utils/validations")
const { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = require("@consts/responseStates")
const { createUser } = require("./userRepository")

const createUserController = async(req, res) => {
    const { name, username, email } = req.body
    console.log({name, username, email})
    if (!name || !username || !email) return res.status(BAD_REQUEST).json()
    console.log("asdasd")
    if(!isEmail(email)) return res.status(BAD_REQUEST)

    try {
        await createUser({ name, username, email })
        return res.status(CREATED)
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR)
    }
}

module.exports = createUserController