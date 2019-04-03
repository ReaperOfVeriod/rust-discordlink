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
		let ipAdress = body.address + `:` + body.port;
		let location = body.location;
		let mapType = body.map;
		let playerCount = `${body.players}/${body.maxplayers}`;
		let gameVersion = body.version;
		let rank = body.rank;
		let votes = body.votes;
		let voteLink = `${body.url}vote/`;
		let uptime = `${body.uptime}%`;
		let status = body.is_online;


		if (body.is_online === 0) {
			let status = `Offline`
		} else {
			let status = `Online`
		}

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
				//.addField('**Status**', status, true)
				.addField('**Server Name**', serverName, true)
				.addField('**IP:PORT**', ipAdress, true)
				.addField('**Location**', location, true)
				.addField('**Map Type**', mapType, true)
				.addField('**Player count**', playerCount, true)
				.addField('**Game Version**', gameVersion, true)
				.addField('**Rank **', rank, true)
				.addField('**Votes**', votes, true)
				.addField('**Vote Link**', 'Click [here](https://rust-servers.net/server/136181/vote/) to vote!', true)
				.addField('**Top Voter**', topVoter, true)
				.addField('**Uptime**', uptime, true)
				.setTimestamp()
				.setImage("https://i.imgur.com/XkC62H9.gif")
			message.channel.send(embed)
		});
	})
}
