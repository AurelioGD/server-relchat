const REG_VALIDATE_EMAIL = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/

const isEmail = (email = "") => !!email.match(REG_VALIDATE_EMAIL)

module.exports = {
    isEmail
}