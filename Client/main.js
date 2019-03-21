const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const private = require('./private.json');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "!code") {

    let getUserID = msg.author.id; //grab id of discord user

    request('http://localhost:3000/User', { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      if (body.some(userId => userId.DiscordID === `<@${getUserID}>`)) {
        console.log('user already exists');
        msg.reply(`user <@${getUserID}> exists already`);
      } else {
        console.log('user does not exist');
        //actual POST request
        request.post('http://localhost:3000/User', {
          json: {
            DiscordID: `<@${getUserID}>`
          }
        }, (error, res, body) => {
          if (error) {
            console.error(error);
            return
          }
          msg.reply(`Your unique code is: ${body._id}`); //reply ID on discord
        });
      }
    });
  }
});

client.login(private.token);