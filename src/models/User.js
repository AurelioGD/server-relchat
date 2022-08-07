const mongoose = require("mongoose")
const { String } = mongoose.Schema.Types

const User = mongoose.model("User", {
  name: String,
  username: String,
  email: String
})

module.exports = User