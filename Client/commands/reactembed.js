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
			.setTitle("Role-Assignment")
			.setDescription("React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!")
			.addBlankField()
			.addField("Verified", `React with ${config.emojiID1} if you have read the rules, to recieve the Verified role!`, true)
			.addField("RusticalandNews", `React with ${config.emojiID2} if you'd like to be pinged when any news regarding Rusticaland is posted!`, true)
			.addField("RustNews", `React with ${config.emojiID3} if you'd like to be pinged when any news regarding Rust is posted!`, true)
			.addField("DiscordNews", `React with ${config.emojiID4} if you'd like to be pinged when any news regarding Discord server is posted!`, true)
            .setImage("https://i.imgur.com/XkC62H9.gif")
        message.channel.send(embed).then(async msg => {
            await msg.react(config.emoji1).catch(console.error);
            await msg.react(config.emoji2).catch(console.error);
            await msg.react(config.emoji3).catch(console.error);
			await msg.react(config.emoji4).catch(console.error);
			message.channel.send("⚠ The rest of the server will not be visible or accessible until you react for the Verified role! \n🕒 You will need to wait for the 10-minute timer to finish before selecting a role. \n🔄 Please refresh Discord using Ctrl+R if the reactions are still not visible.");
        }).catch(console.error);
        message.delete();
    }
};