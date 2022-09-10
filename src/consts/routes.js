const ROUTES = {
    USER: "/user",
    CHAT: {
        ROOT:"/chat",
        PUBLIC_CHATS: "/chat/public-chats",
        MEMBERS:"/chat/:chatId/members",
    }
}

module.exports = ROUTES