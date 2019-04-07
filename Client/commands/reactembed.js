const Discord = require('discord.js');
const config = require("./../config.json");

module.exports = {
    name : "reactembed",
    usage : `${config.prefix}reactembed`,
	description : "Sends embed to react for role to.",
    execute(client, message, args) {

        if (message.guild === null) { return }

        const embed = new Discord.RichEmbed() //embed
        embed.addField("To prevent bot raid & spams we setup a verification command", "If you have read the rules then react below with 😄", true)
            .setColor('#ff0000')
            .setImage("https://i.imgur.com/XkC62H9.gif")
        message.channel.send(embed).then(msg => {
            msg.react('😄').catch(console.error);
        }).catch(console.error);
        message.delete();
    }
};

