const config = require("./../config.json");

module.exports = {
    name : "stop",
    usage : `${config.prefix}stop`,
	description : "to stop playing youtube song in voice channel.",
    execute(client, message, args) {
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
}