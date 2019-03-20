const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
var mongoose = require('mongoose');
Task = require('./Models/models');
Shit = mongoose.model('Shit');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ShitDB', { useNewUrlParser: true }); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === "!code") {

        let getUserID = msg.member.toString(); //grab id of discord user
        
        Shit.countDocuments({ DiscordID: `${getUserID}` }, function (err, shit) {
            if ( shit>0 ) {
                console.log(`found user ${getUserID} already`);
                msg.reply(`user ${getUserID} exists already`);
            } else {
                console.log('does not exist yet');
                //actual POST request
                request.post('http://localhost:3000/shit', {
                  json: {
                    DiscordID: `${getUserID}`
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

client.login('NDc3NTI4NjMzMzc2NzY4MDAx.D3LNSg.z2hq1BaYpWM_um_ouWnBfKBT_BI');