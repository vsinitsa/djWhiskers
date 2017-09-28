const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args, queue, conf) => {
    let embed = new Discord.RichEmbed()
        .setColor("#13108D")
        .addField("/help", "help command")
        .addField("/join", "asks the bot to join the server")
        .addField("/play {link} or {search}", "plays link or first result of search");

    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help"
}