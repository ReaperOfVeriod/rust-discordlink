const config = require("./../config.json");
//const request = require('request');

module.exports = (client, ready) => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity('Website: rusticaland.net | Forum: rusticaland.com', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);

  //var interval = setInterval(function () {
    //request('https://rust-servers.net/api/?object=servers&element=detail&key=fMfruWLJibpYrcIpGfg1zQ2koShJ5hdfVOH', { json: true }, (err, res, body) => {
      //if (err) { return console.log(err); }
      //if (body.is_online !== 1 ) {
        //let playing = `${body.players}/${body.maxplayers} Online! | connect rusticaland.ddns.net:28015`
        //client.user.setActivity(playing);
      //} else {
        //let status = `server offline :(`
        //client.user.setActivity(status);
      //}
    //});   
  //}, 1 * 50000);
};