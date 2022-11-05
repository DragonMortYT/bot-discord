const Discord = require("discord.js")
const bot = new Discord.Client({Intents: 3276799})
const config = require("./config")
const kick = require("./commands/kick")

Client.login(process.env.token, process.env)
