const Discord = require('discord.js');
const cfg = require('../config.json');
const { inspect } = require('util');
var devID = cfg.developerID;

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o=>{});
  if(message.author.id !== devID) return message.reply("Only the owner can access this command.");
  try {
    const code = args.join(" ");
    let evaled = eval(code);
  
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
  
      let evalem = new Discord.RichEmbed()
      .setTitle("Eval 🔒")
      .setDescription("**Input**\n```" + code + "```\n**Output**\n```" + evaled + "```")
      .setColor("#1dd110");
  
    message.channel.send(evalem);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
  }
}

module.exports.help = {
    name: "eval"
}