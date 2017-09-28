const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args, queue, conf) => {
    var pad = "00"
    var r = randomInt(0, 256).toString(16);
    var g = randomInt(0, 256).toString(16);
    var b = randomInt(0, 256).toString(16);
    var rgb = `#${r.substring(0, pad.length - r.length) + r}${g.substring(0, pad.length - g.length) + g}${b.substring(0, pad.length - b.length) + b}`;
    console.log(rgb.toUpperCase());
    let embed = new Discord.RichEmbed()
        .setColor(rgb.toUpperCase())
        .addField("/help", "help command")
        .addField("/join", "asks the bot to join the server")
        .addField("/play {link} or {search}", "plays link or first result of search");

    message.channel.send({embed: embed});
}

var randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.help = {
    name: "help"
}