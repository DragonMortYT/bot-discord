const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client({Intents: 3276799})
const config = require("./config")

client.login(process.env.TOKEN, process.env)
