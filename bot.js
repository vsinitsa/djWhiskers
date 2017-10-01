const config = require("./config.json");
const Discord = require("discord.js");
const request = require("request");
const ytdl = require("ytdl-core");
const ytSearch = require("youtube-search");
const fs = require('fs');

//discord client
const prefix = config.prefix;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
//music bot queue and variables
let queue = {};
let playerConfig = {"volume": 0.5, "ops": {maxResults: 10, key: config.youtubetoken}};

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);

    let cmdfiles = files.filter(f => f.split(".").pop() === "js");
    if(cmdfiles.length <= 0){
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${cmdfiles.length} commands`);

    cmdfiles.forEach((f, i) => {
        let temp = require(`./commands/${f}`);
        console.log(`${i+1}: ${temp.help.name} loaded`);
        bot.commands.set(temp.help.name, temp);
    });
});


bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);
    // try{
    //     bot.guilds.forEach(async guild => {
    //         let connection = guild.members.find(member => member.id === "109835713062662144").voiceChannel;
    //         if(connection){
    //             await connection.join();
    //             queue[connection.guild.id] = [];
    //         }
    //     });
    // }catch(e){
    //     console.log(e.stack);
    // }
});

bot.on("message", async message => {
   if(message.author.bot) return;

   let msgArray = message.content.split(" ");
   let command = msgArray[0];
   let args = msgArray.slice(1);

    if(command === "testq"){
        console.log(playerConfig["volume"]);
    }

   if(!command.startsWith(prefix)) return;

   let cmd = bot.commands.get(command.slice(prefix.length));
   if(cmd) cmd.run(bot, message, args, queue, playerConfig);
});


bot.login(config.token);