const { DEFAULT_SUCCESS_RESPONSE } = require("@consts/responsesDefault")

const generateUserCreatedResponse = (userId) => ({
    ...DEFAULT_SUCCESS_RESPONSE,
    payload: {
        userId
    }
})

module.exports = {
    generateUserCreatedResponse
}