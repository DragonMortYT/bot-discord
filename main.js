const Discord = require("discord.js")
const bot = new Discord.Client({Intents: 3276799})
const config = require("./config")
const kick = require("./commands/kick")

bot.login(config.token)
Client.login(process.env.TOKEN)