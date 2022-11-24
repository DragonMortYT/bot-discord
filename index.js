const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix ="/";

//Welcome Message
client.on("guildmemberAdd", member => {
    let embed = new Discord.RichEmbed ()
        .setDescription("Oh !" + member.user + "viens de rejoindre Naucratis! Bienvenue!")
        .setFooter("Nous sommes maintenant" + member.guild.memberCount )
        .setColor("FFB60")
        .setImage("https://cdn.discordapp.com/attachments/866786837419130921/993182923647893594/unknown.png")
        .setTimestamp
    member.guild.channels.get('866785932371951616').sendMessage(embed)
})



client.once('ready', () => {
    console.log('Je suis prêt !');
});

client.login(process.env.TOKEN);
