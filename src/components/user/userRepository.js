const User = require("@models/User")

const createUser = async({ name, username, email }) => { 

  const user = new User({name, username, email})

  const response = await user.save()

  return response
}

module.exports = {
    createUser
}
