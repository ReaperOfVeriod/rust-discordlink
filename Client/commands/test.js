const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    request('https://rust-servers.net/api/?object=servers&element=detail&key=fMfruWLJibpYrcIpGfg1zQ2koShJ5hdfVOH', { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err); 
        }
        //console.log(body);

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
        .setTitle('Rusticaland Stats.')
        .setThumbnail('https://images-ext-2.discordapp.net/external/Zs3Tr3G-0Z03XlKZD5rTkF9NIE0_aGsfDotdriSk1LA/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/550753683433062420/d5089bab0829653868e7b1b5b1354e3f.webp')
        .setDescription(`
        ** id **
        ${id}
        ** Server Name **
        ${serverName}
        ** IP **
        ${ipAdress}
        ** Location **
        ${location}
        ** Map Type **
        ${mapType}
        ** Player count **
        ${playerCount}
        ** Game Version **
        ${gameVersion}
        ** rank **
        ${rank}
        ** Votes **
        ${votes}
        ** Vote Link **
        ${voteLink}

        
        `)
        .setImage("https://cdn.discordapp.com/attachments/557640637151707136/561952828789227520/Banner.gif")
        .setColor('#ff0000')
    message.channel.send(embed)
    });
}
