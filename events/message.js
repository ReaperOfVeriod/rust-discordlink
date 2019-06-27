module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) >= 0) {
        // standard argument/command name definition.
      const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      // Grab the command data from the client.commands Enmap
      const cmd = client.commands.get(command)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
      //console.log(cmd.help.aliases);
      if (!cmd) return;
      // If that command doesn't exist, silently exit and do nothing
      if (cmd) {
        // Run the command
        cmd.execute(client, message, args);
      }
    }
};