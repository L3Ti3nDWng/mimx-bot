module.exports = {
    name: 'ping',
    category: 'EO',
    run: (client, message, args) => {
        message.reply(`🏓\`${client.ws.ping}ms\``);
    }
}