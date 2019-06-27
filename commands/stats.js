const request = require('request');
const Discord = require('discord.js');
const config = require("./../config.json");

module.exports = {

	name : "stats",
	aliases : ["server", "status"],
	usage : `${config.prefix}stats`,
	description : "Displays server stats for Rusticaland.",
	execute(client, message, args) {
		request('https://rust-servers.net/api/?object=servers&element=detail&key=fMfruWLJibpYrcIpGfg1zQ2koShJ5hdfVOH', { json: true }, (err, res, body) => {
		if (err) {
			return console.log(err);
		}

		let id = body.id;
		let serverName = body.name;
		let ipAdress = body.address + `:` + body.port;
		let location = body.location;
		let mapType = body.map;
		let playerCount = `${body.players}/${body.maxplayers}`;
		let serverVersion = body.version;
		let rank = body.rank;
		let votes = body.votes;
		let voteLink = `${body.url}vote/`;
		let uptime = `${body.uptime}%`;
		let status = body.is_online;

		
		

		request('https://rust-servers.net/api/?object=servers&element=voters&key=fMfruWLJibpYrcIpGfg1zQ2koShJ5hdfVOH&month=current&format=json&limit=1', { json: true }, (err, res, body1) => {
			if (err) {
				return console.log(err);
			}
			let topVoter = body1.voters[0].nickname;

			const embed = new Discord.RichEmbed() //embed
				.setColor('#32CD32')
				.setTitle("Rusticaland's Status")
				.setURL('https://rusticaland.net/')
				.setThumbnail('https://i.imgur.com/ZbiCgRb.png')
				.setDescription('')
				//.addField('**ID**', id, true)
				if (status === 0) {
					embed.addField('**Status**', "Offline", true)
				} else {
					embed.addField('**Status**', "Online", true)
				}
				embed.addField('**Server Name**', serverName, true)
				embed.addField('**IP:PORT**', ipAdress, true)
				embed.addField('**Location**', location, true)
				embed.addField('**Map Type**', mapType, true)
				embed.addField('**Player count**', playerCount, true)
				embed.addField('**Server Version**', serverVersion, true)
				embed.addField('**Rank **', rank, true)
				embed.addField('**Votes**', votes, true)
				embed.addField('**Top Voter**', topVoter, true)
				embed.addField('**Vote Link**', '[Click here to vote!](https://rust-servers.net/server/136181/vote/)', true)
				embed.addField('**Uptime**', uptime, true)
				embed.setTimestamp()
				embed.setImage("https://i.imgur.com/XkC62H9.gif")
			message.channel.send(embed);
			message.delete();
		});
	})
	}
}