const Discord = require('discord.js');
const client = new Discord.Client();

client.on('error', (error) => {
    console.error(new Date() + ": Discord client encountered an error");
    console.error(error);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    member.send("<this is supposed to be a download link :D>");
    member.kick().then((member) => {
        console.log(`kicked ${member}`)
    }).catch(err => {
         console.log(`could not kick ${member}`)
         console.log("================================================================");
         console.error(err)
    });
});

client.login('NDc3NTI4NjMzMzc2NzY4MDAx.XMhIsQ.sKYJCo2IV2pQt6WJ06Qg4l1LZPA');