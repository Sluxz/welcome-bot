const Discord = require("discord.js")

const TOKEN = "OTczNjQ0MzYzNTUwODM4ODg1.Gmyhgl.PVxrDrmJUy6dz02kexeum8L5sqGwD3IDUrIN2U"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello little fella")
    }
})

client.login(TOKEN)