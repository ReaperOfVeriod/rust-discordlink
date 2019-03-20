const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
var mongoose = require('mongoose');
Task = require('./Models/models');
User = mongoose.model('User');
const private = require('./private.json');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDB', { useNewUrlParser: true }); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === "!code") {

        let getUserID = msg.author.id; //grab id of discord user
        
        User.countDocuments({ DiscordID: `<@${getUserID}>` }, function (err, shit) {
            if ( shit>0 ) {
                //console.log(`found user ${getUserID} already`); //debug option
                msg.reply(`user <@${getUserID}> exists already`);
            } else {
                //console.log('does not exist yet'); //debug option
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