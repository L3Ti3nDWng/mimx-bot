const { readdirSync } = require('fs');
const { token, guildId, clientId } = require('../config.json');
const command = require('./command');

const slashcommands = [];

module.exports = (client) => {
    let count = 0;
    readdirSync('./slashCommands/').forEach(dir => {
        const commands = readdirSync(`./slashCommands/${dir}`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const commandsFile = require(`../slashCommands/${dir}/${file}`);
            if (commandsFile.name) {
                client.interactions.set(commandsFile.name, commandsFile);
                slashcommands.push(commandsFile);
                count++;
            } else {
                continue;
            }
        }
    });

    client.once('ready', async () => {
        await client.guilds.cache.get(guildId).commands.set(slashcommands);

        // await client.application.commands.set(slashcommands);
    });

    console.log(`Đã load ${count} slashCommand!`);
}