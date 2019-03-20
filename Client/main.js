const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
var mongoose = require('mongoose');
Task = require('./Models/models');
User = mongoose.model('User');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDB', { useNewUrlParser: true }); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === "!code") {

        let getUserID = msg.member.toString(); //grab id of discord user
        
        User.countDocuments({ DiscordID: `${getUserID}` }, function (err, shit) {
            if ( shit>0 ) {
                console.log(`found user ${getUserID} already`);
                msg.reply(`user ${getUserID} exists already`);
            } else {
                console.log('does not exist yet');
                //actual POST request
                request.post('http://localhost:3000/User', {
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

    if (msg.content === "what is eerix?") {
      msg.reply('<@295185070292074497> is a cunt.');
    }
    if (msg.content === "why is eerix a cunt?") {
      msg.reply('<@295185070292074497> is a cunt, because daddy <@197082304420511744> told me so.... uwu');
    }
    if (msg.content === "what do you think of pride?") {
      msg.reply(`they are faggots that should be annihilated.` + `\n` + `https://media.giphy.com/media/rkkMc8ahub04w/giphy.gif`);
    }
    

});

client.login('NDc3NTI4NjMzMzc2NzY4MDAx.D3Po2g.ZaRrNTOC8RWZjimNnTEMgF59JzI');