const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
const private = require("./private.json");
//attaching the config to the CLIENT so it's accessible everywhere
client.config = config;

client.on('error', (error) => {
  console.error(new Date() + ": Discord client encountered an error");
  console.error(error);
});

//RAW reaction packet listener
const events = {
  MESSAGE_REACTION_ADD: 'messageReactionAdd',
  MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
  if (!events.hasOwnProperty(event.t)) return;

  const { d: data } = event;
  const user = client.users.get(data.user_id);
  const channel = client.channels.get(data.channel_id) || await user.createDM();

  if (channel.messages.has(data.message_id)) return;

  const message = await channel.fetchMessage(data.message_id);
  const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
  let reaction = message.reactions.get(emojiKey);

  if (!reaction) {
    const emoji = new Discord.Emoji(client.guilds.get(data.guild_id), data.emoji);
    reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === client.user.id);
  }

  client.emit(events[event.t], reaction, user, data, message);
});

client.on('messageReactionAdd', (reaction, user, data, message) => {
  if (reaction.message.id !== config.embedRoleReactID) return;
  const guild = client.guilds.get(config.serverID);
  if (reaction.emoji.name === "check") {
    const Role = guild.roles.find(role => role.name === config.roleName1);
    const MEMBER = guild.member(user);
    MEMBER.addRole(Role).catch(console.error);
    user.send(`You have been added to the ${Role.name} role!`).catch(console.error);
  } else if (reaction.emoji.name === "rusticaland") {
    const Role = guild.roles.find(role => role.name === config.roleName2); 
    const MEMBER = guild.member(user);
    MEMBER.addRole(Role).catch(console.error);
    user.send(`You have been added to the ${Role.name} role!`).catch(console.error);
  } else if (reaction.emoji.name === "rust") {
    const Role = guild.roles.find(role => role.name === config.roleName3); 
    const MEMBER = guild.member(user);
    MEMBER.addRole(Role).catch(console.error);
    user.send(`You have been added to the ${Role.name} role!`).catch(console.error);    
  } else if (reaction.emoji.name === "rust_fridge") {
    const Role = guild.roles.find(role => role.name === config.roleName4); 
    const MEMBER = guild.member(user);
    MEMBER.addRole(Role).catch(console.error);
    user.send(`You have been added to the ${Role.name} role!`).catch(console.error);    
  }
});

// client.on('messageReactionRemove', (reaction, user) => {
//   console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
//   if (reaction.message.id !== config.embedRoleReactID) return;
//   const guild = client.guilds.get(config.serverID);
//   if (reaction.emoji.name === "😮") {
//     const Role = guild.roles.find(role => role.name === config.roleName1);
//     const MEMBER = guild.member(user);
//     MEMBER.removeRole(Role).catch(console.error);
//     user.send(`You no longer have the ${Role.name} role!`).catch(console.error);
//   } else if (reaction.emoji.name === "😄") {
//     const Role = guild.roles.find(role => role.name === config.roleName2); 
//     const MEMBER = guild.member(user);
//     MEMBER.removeRole(Role).catch(console.error);
//     user.send(`You no longer have the ${Role.name} role!`).catch(console.error);
//   } else if (reaction.emoji.name === "🤔") {
//     const Role = guild.roles.find(role => role.name === config.roleName3); 
//     const MEMBER = guild.member(user);
//     MEMBER.removeRole(Role).catch(console.error);
//     user.send(`You no longer have the ${Role.name} role!`).catch(console.error);   
//   }
// });

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
