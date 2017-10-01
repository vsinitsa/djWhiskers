const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args, queue, conf) => {
    try{
        let dispatcher = bot.voiceConnections.get(message.guild.id).dispatcher;
        dispatcher.end();
    }catch(e){
        message.channel.send("No song currently playing!");
    }
}

module.exports.help = {
    name: "skip",
    desc: "Skips current playing song.",
    usage: "/skip"
}