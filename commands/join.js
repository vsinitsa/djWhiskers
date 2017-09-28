const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args, queue, conf) => {
    if(!message.member.voiceChannel) return message.channel.send("Pls join a voice channel first!");
    try{
        await message.member.voiceChannel.join();
        queue[message.guild.id] = [];
    }catch(e){
        console.log(e.stack);
    }
}

module.exports.help = {
    name: "join"
}