module.exports = (client, message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() == 'a') {
        message.reply('A a cái gì mà a?!?!');
    };

    const prefix = ';';
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
}