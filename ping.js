const Discord = require("discord.js");
const cfg = require("../config.json");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Pinging...").then(m => {
    let ping = m.createdTimestamp - message.createdTimestamp
    let pingEm = new Discord.RichEmbed()
    .setDescription(`📶 **Bot Latency**: ${ping}ms\n🖥 **API Latency**: ${Math.round(bot.ping)}ms`)
    .setColor("#e5f442")
    .setFooter(`©2019 ${cfg.name}`);
    
    m.edit(pingEm);
    });
}
 
module.exports.help = {
  name: "ping"
}