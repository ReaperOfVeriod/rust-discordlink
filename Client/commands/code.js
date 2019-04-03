const request = require('request');

module.exports = {
  name : "code",
  execute(client, message, args) {

    let getUserID = message.author.id; //grab id of discord user

    request('http://localhost:3000/User', { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      if (body.some(userId => userId.DiscordID === `<@${getUserID}>`)) {
        console.log('user already exists');
        message.reply(`user <@${getUserID}> exists already`);
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
          message.reply(`Your unique code is: ${body._id}`); //reply ID on discord
        });
      }
    });
  }
}