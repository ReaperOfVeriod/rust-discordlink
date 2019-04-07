const Discord = require('discord.js');
const config = require("./../config.json");

module.exports = {
    name : "reactembed",
    usage : `${config.prefix}reactembed`,
	description : "Sends embed to react for role to.",
    execute(client, message, args) {

        if (message.guild === null) { return }

        const embed = new Discord.RichEmbed() //embed
            .setTitle('test')
            .setDescription(`
            
            🔥
            
            `)
            .setColor('#ff0000')
            .setFooter(`ID: ${message.author.id}`);
        message.channel.send(embed).then(msg => {
            msg.react('😄').catch(console.error);
        }).catch(console.error);
        message.delete();
    }
};

