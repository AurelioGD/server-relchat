const mongoose = require("mongoose")
const { String, ObjectId, Array, Date } = mongoose.Schema.Types

const Chat = mongoose.model("Chat", {
  name: String,
  owner: ObjectId,
  image: String,
  privacity: String,
  category: String,
  members: Array,
  messages: [
    {
      senderId: ObjectId,
      message: String,
      date: Date,
    },
  ],
})

module.exports = Chat
