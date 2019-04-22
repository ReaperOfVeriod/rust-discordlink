const YTDL = require("ytdl-core");
const config = require("./../config.json");
const queueModule = require("./../queue");

module.exports = {
    name : "play",
    usage : `${config.prefix}play <youtubelink>`,
	description : "to play youtube song in voice channel.",
    execute(client, message, args) {
        function play(connection,message){
            module.exports.CONNECT = connection;
            var server = servers[message.guild.id];
            server.dispatcher = connection.playStream(YTDL(queueModule.queueArr[0],{filter: "audioonly"}));
    
            queueModule.queueArr.shift();
            server.dispatcher.on("end", function() {
                if (queueModule.queueArr[0]) play(connection, message);
                else connection.disconnect();
            });
        }
    
        var servers = {};

        if (!args[0]) {
            message.channel.send("please provide a link.");
            return;
        }
    
        if (!message.member.voiceChannel) {
            message.channel.send("you must be in a voice channel.");
            return;
        }
    
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        
        var server = servers[message.guild.id];
    
        //server.queue.push(args[0]);
        queueModule.push2arr(args[0]);

        console.log(queueModule.queueArr);
        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
        });
    }
}
