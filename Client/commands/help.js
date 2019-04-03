const Discord = require('discord.js');
const config = require("./../config.json");
const fs = require("fs");

exports.run = (client, message, args) => {

    if (args[0] === 'help') return message.channel.send(`${config.prefix}help help does not work just do: ${config.prefix}help`);

    if (args[0]) {

        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            let helpEmbed = new Discord.RichEmbed()
                .setDescription('Help Menu')
                .addField('**command name**', command.help.name, true)
                .addField('**command usage**', command.help.usage, true)
                .addField('**command description**', command.help.description, false)
            message.channel.send(helpEmbed);
        }
    }
    if (!args[0]) {

        fs.readdir("./commands/", (err, files) => {
            if (err) return console.error(err);
            let commandArray = [];
            files.forEach(file => {
                commandName = file.split('.')[0];
                commandArray.push(commandName);

            })
            let helpEmbed = new Discord.RichEmbed()
                .setDescription('Help Menu')
                commandArray.forEach(command => {
                    helpEmbed.addField(`**${command}**`,"More info? use:" + " " + config.prefix + "help" + " " + command, false)
                })
            message.channel.send(helpEmbed);
        });
    }
}

exports.help = {
    name: "help"
}