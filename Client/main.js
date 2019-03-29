const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
const private = require("./private.json");
//attaching the config to the CLIENT so it's accessible everywhere
client.config = config;

client.on('error', console.error);

// console chatter
let y = process.openStdin()
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  client.channels.get(config.consoleChannel).send(x.join(" "));
});

//event handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
//command handler
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command: ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(private.token);
