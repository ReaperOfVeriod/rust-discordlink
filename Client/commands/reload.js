const config = require("./../config.json");

module.exports = {
  name : "reload",
  usage : `${config.prefix}reload`,
	description : "reloads commands (ADMIN ONLY)",
  execute(client, message, args) {
    const config = require("./../config.json");
    if (message.guild === null) { return }
    if(message.author.id !== config.ownerID) return;
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
    console.log(`The command ${commandName} has been reloaded`)
  }
};