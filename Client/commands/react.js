const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (message.guild === null) { return }
    
    // sets roles.
    let fireRole = message.guild.roles.find(role => role.name === "test");
    let myRole = message.guild.roles.find(role => role.name === "Ally");

    const filter = (reaction, user) => ['🔥', '🤷'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new Discord.RichEmbed() //embed
        .setTitle('test')
        .setDescription(`
        
        🔥 ${fireRole.toString()}
        🤷 ${myRole.toString()}
        
        `)
        .setColor('#ff0000')
        .setFooter(`ID: ${message.author.id}`);
    message.channel.send(embed).then(async msg => { //async function to see if reacted with emote
        await msg.react('🔥');
        await msg.react('🤷');

        msg.awaitReactions(filter, {
            max: 1
        }).then(collected => {
            const reaction = collected.first();

            switch (reaction.emoji.name) { //if async function of either role is received assign said role
                case '🔥':
                    message.member.addRole(fireRole).catch(console.error);
                    message.channel.send(`you have been added to the ${fireRole.name} role`).then(m => m.delete(3000));
                    break;
                case '🤷':
                    message.member.addRole(myRole).catch(console.error);
                    message.channel.send(`you have been added to the ${myRole.name} role`).then(m => m.delete(3000));
                    break;
            }
        }).catch(collected => {
            return message.channel.send(`Something went wrong`); //shit just hit the fan for idk what reason
        });
    });
    message.delete(); //deletes initial `!test` message
}