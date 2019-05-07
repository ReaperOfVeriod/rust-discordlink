const Discord = require('discord.js');
const config = require("./../config.json");

module.exports = {
    name : "reactembed",
    usage : `${config.prefix}reactembed`,
	description : "Sends embed to react for role to.",
    execute(client, message, args) {

        if (message.guild === null) { return }

        const embed = new Discord.RichEmbed()
			.setColor('#32CD32')
			.addField("Role-Assignment", "React to the following Emoji, to recieve the following roles", true)
			.addField("Verified", `React with ${config.emoji1} If you have read the rules, to recieve the Verified role`, true)
			.addField("RusticalandUpdate", `React with ${config.emoji2} if you'd like to be pinged when any news regarding Rusticaland is posted!`, true)
			.addField("RustUpdate", `React with ${config.emoji3} if you'd like to be pinged when any news regarding Rust is posted!`, true)
			.addField("DiscordUpdate", `React with ${config.emoji4} if you'd like to be pinged when any news regarding Discord server is posted!`, true)
            .setImage("https://i.imgur.com/XkC62H9.gif")
        message.channel.send(embed).then(async msg => {
            await msg.react(config.emoji1).catch(console.error);
            await msg.react(config.emoji2).catch(console.error);
            await msg.react(config.emoji3).catch(console.error);
			await msg.react(config.emoji4).catch(console.error);
        }).catch(console.error);
        message.delete();
    }
};