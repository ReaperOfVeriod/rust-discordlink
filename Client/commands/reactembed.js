const Discord = require('discord.js');
const config = require("./../config.json");

module.exports = {
    name : "reactembed",
    usage : `${config.prefix}reactembed`,
	description : "Sends embed to react for role to.",
    execute(client, message, args) {

        if (message.guild === null) { return }

        const embed = new Discord.RichEmbed() //embed
			.setColor('#32CD32')
			.addField("Role-Assignment", "React to the following Emoji, to recieve the following roles", true)
			.addBlankField()
			.addField("Verified", "React with <:check:572743170962489355> If you have read the rules, to recieve the Verified role", true)
			.addBlankField()
			.addField("RusticalandUpdate", "React with <:rusticaland:570933703103217664> if you'd like to be pinged when any news regarding Rusticaland is posted!", true)
			.addBlankField()
			.addField("RustUpdate", "React with <:rust:575062284511215626> if you'd like to be pinged when any news regarding Rust is posted!", true)
			.addBlankField()
			.addField("DiscordUpdate", "React with <:rust_fridge:572739168418004993> if you'd like to be pinged when any news regarding Discord server is posted!", true)
            .setImage("https://i.imgur.com/XkC62H9.gif")
        message.channel.send(embed).then(async msg => {
            await msg.react('572743170962489355').catch(console.error);
            await msg.react('570933703103217664').catch(console.error);
            await msg.react('575062284511215626').catch(console.error);
			await msg.react('572739168418004993').catch(console.error);
			
        }).catch(console.error);
        message.delete();
    }
};