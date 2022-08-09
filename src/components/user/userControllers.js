const { isEmail } = require("@utils/validations")
const { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = require("@consts/responseStates")
const { INVALID_REQUEST_RESPONSE, INTERNAL_ERROR_RESPONSE } = require("@consts/responsesDefault")
const { generateUserCreatedResponse } = require("@utils/responseGenerators")
const { createUser } = require("./userRepository")

const createUserController = async(req, res) => {
    const { name, username, email } = req.body

    if (!name || !username || !email) return res.status(BAD_REQUEST).json(INVALID_REQUEST_RESPONSE)
    
    if(!isEmail(email)) return res.status(BAD_REQUEST).json(INVALID_REQUEST_RESPONSE)

    try {
        const dbResponse = await createUser({ name, username, email })
        const response = generateUserCreatedResponse(dbResponse._id)
        return res.status(CREATED).json(response)
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json(INTERNAL_ERROR_RESPONSE)
    }
}

module.exports = createUserController