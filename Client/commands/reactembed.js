const Discord = require('discord.js');
const config = require("./../config.json");

module.exports = {
    name: "reactembed",
    usage: `${config.prefix}reactembed`,
    description: "Sends embed to react for role to.",
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
            regex = /<?(a)?:?(\w{2,32}):(\d{17,19})>?/;
            let emoji1 = regex.exec(config.emoji1)
            if (!emoji1) { //true
                await msg.react(config.emoji1).catch(console.error);
            } else { //false
                let Emoji1 = config.emoji1.replace(/\D+/g, '');
                await msg.react(Emoji1).catch(console.error);
            }
            let emoji2 = regex.exec(config.emoji2)
            if (!emoji2) { //true
                await msg.react(config.emoji2).catch(console.error);
                return;
            } else { //false
                let Emoji2 = config.emoji2.replace(/\D+/g, '');
                await msg.react(Emoji2).catch(console.error);
            }
            let emoji3 = regex.exec(config.emoji3)
            if (!emoji3) { //true
                await msg.react(config.emoji3).catch(console.error);
            } else { //false
                let Emoji3 = config.emoji3.replace(/\D+/g, '');
                await msg.react(Emoji3).catch(console.error);
            }
            let emoji4 = regex.exec(config.emoji4)
            if (!emoji4) { //true
                await msg.react(config.emoji4).catch(console.error);
            } else { //false
                let Emoji4 = config.emoji4.replace(/\D+/g, '');
                await msg.react(Emoji4).catch(console.error);
            }
            message.channel.send("⚠ The rest of the server will not be visible or accessible until you react for the Verified role! \n 🕒You will need to wait for the 10-minute timer to finish before selecting a role. \n 🔄Please refresh Discord using Ctrl+R if the reactions are still not visible.");
        }).catch(console.error);
        message.delete();
    }
};