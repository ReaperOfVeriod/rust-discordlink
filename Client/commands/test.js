const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    request('https://rust-servers.net/api/?object=servers&element=detail&key=fMfruWLJibpYrcIpGfg1zQ2koShJ5hdfVOH', { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err); 
        }
        console.log(body);

        let id = body.id;
        let serverName = body.name;
        let ipAdress = `Client.connect` + " " + body.address + `:` + body.port;
        let location = body.location;
        let mapType = body.map;
        let playerCount = `${body.players}/${body.maxplayers}`;
        let gameVersion = body.version;
        let rank = body.rank;
        let votes = body.votes;
        let voteLink = `${body.url}vote/`;

        const embed = new Discord.RichEmbed() //embed
        .setTitle('test')
        .setDescription(`
        
        ${id}

        ${serverName}

        ${ipAdress}

        ${location}

        ${mapType}

        ${playerCount}

        ${gameVersion}

        ${rank}

        ${votes}

        ${voteLink}
        
        `)
        .setColor('#ff0000')
        //.setFooter(`ID: ${message.author.id}`);
    message.channel.send(embed)
    });
}
