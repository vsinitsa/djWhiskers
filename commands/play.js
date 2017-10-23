const Discord = module.require("discord.js");
const ytdl = module.require("ytdl-core");
const ytSearch = module.require("youtube-search");
const randColor = module.require("../helpers/randcolor.js");

module.exports.run = async (bot, message, args, queue, conf) => {
    if(!args[0].includes("youtube")){
        ytSearch(args.join(" "), conf["ops"], async (err, results) => {
            let link = await results[0].link;
            playSong(link, message, bot, queue, conf);
        });
    }else{
        playSong(args[0], message, bot, queue, conf);
    }

}

var playSong = async (song, message, bot, queue, conf) =>{
    let id = message.guild.id;
    let connection = bot.voiceConnections.get(id);
    if(connection.speaking){
        queue[id].push(song);
    }else{
        const dispatcher = connection.playStream(ytdl(song, {filter: 'audioonly'}), {volume: conf["volume"]});
        ytdl(song, (err, info) => {
            let embed = new Discord.RichEmbed()
            .setColor(randColor.randColor())
            .setTitle("NOW PLAYING:")
            .addField(info.title, song);

            message.channel.send({embed: embed});
        });
        dispatcher.on("end", () => {
           if(queue[id].length > 0){
               playSong(queue[id].shift(), message, bot, queue, conf);
           }
        });
    }
}

module.exports.help = {
    name: "play",
    desc: "Plays provided link or first result of search query.",
    usage: "/play {link} or /play {search queary}"
}