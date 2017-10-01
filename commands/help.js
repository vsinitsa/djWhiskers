const Discord = module.require("discord.js");
const randColor = module.require("../helpers/randColor.js");

module.exports.run = async (bot, message, args, queue, conf) => {
    let embed = new Discord.RichEmbed()
        .setColor(randColor.randColor());

    bot.commands.forEach((c, i) =>{
       embed.addField(c.help.usage, c.help.desc);
    });

    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help",
    desc: "Shows all available commands.",
    usage: "/help"
}