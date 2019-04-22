const config = require("./../config.json");
const queue = require("./../queue");
const YTDL = require("ytdl-core");
const connect = require("./play");

module.exports = {
    name : "skip",
    usage : `${config.prefix}skip`,
	description : "skip currently playing song.",
    execute(client, message, args) {
        let connection = connect.CONNECT;
        server.dispatcher = connection.playStream(YTDL(queue.queueArr[0], { filter: "audioonly" }));
        servers = {};
        var server = servers[message.guild.id];

        if (server.dispatcher) server.dispatcher.end();
    }
}