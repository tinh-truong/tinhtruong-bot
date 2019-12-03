const Discord = require("discord.js");
const cfg = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    let user = message.author;
    let permissionEmbed =  new Discord.RichEmbed()
    .setDescription("Command execution failed. You do not have the permissions to be able to use this command.\n`MANAGE_MESSAGES\n\`")
    .setColor("#ff6647")
    .setFooter(`Requested by ${user.username}`, user.avatarURL)
    .setTimestamp()
    .setThumbnail('https://i.tinhcalibuso.us/oops.gif');
    if(!message.member.hasPermission("MANAGE_MESSAGES", false)) return message.channel.send(permissionEmbed);
    let randoColor = ((1 << 24) * Math.random() | 0).toString(16);
    let newMessage = args.join(" ");
    let failEmbed =  new Discord.RichEmbed()
    .setDescription("In order for a message to be sent, please type what you would like to say.\n\`\`\`css\nUsage: a!say <args>\n\`\`\`")
    .setColor("#ff6647")
    .setFooter(`Requested by ${user.username}`, user.avatarURL)
    .setTimestamp()
    .setThumbnail('https://i.tinhcalibuso.us/oops.gif');
    if(!newMessage) return message.channel.send(failEmbed);
    let newEmbed = new Discord.RichEmbed()
    .setDescription(newMessage)
    .setFooter(`Sent by ${user.username}`, user.avatarURL)
    .setColor(`#${randoColor}`)
    .setTimestamp();
    message.channel.send(newEmbed);

}

module.exports.help = {
    name: "say"
}
