const Discord = require('discord.js');
const client = new Discord.Client();

client.on('error', (error) => {
    console.error(new Date() + ": Discord client encountered an error");
    console.error(error);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    //console.log(msg.member);
    
    const guildid = "572770600993423370";
    const guild = client.guilds.get(guildid);
    const channelID = guild.channels.find(channel => channel.name === "general");

    const options = {
        temporary : true,
        maxAge : 1000,
        maxUses : 1,
        unique : true
    };

    channelID.createInvite(options)
    .then(invite => msg.member.send(`here is your invite ${invite}`))
    .catch(console.error);
  }
});

client.login('MzgyODc2NjczODk4NDQ2ODU4.XMhI3A.B1C9DASnbzax--LSuYPCPAWQ7DY');