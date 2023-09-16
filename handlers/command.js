const { readdirSync } = require('fs');
const { arrayBuffer } = require('stream/consumers');

module.exports = (client) => {
    let count = 0;
    readdirSync('./commands').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const commandsFile = require(`../commands/${dir}/${file}`);
            if (commandsFile.name) {
                count++;
                client.commands.set(commandsFile.name, commandsFile);
            } else {
                continue;
            }
            if (commandsFile.aliases && Array.isArray(commandsFile.aliases)) commandsFile.aliases.forEach(alias => client.aliases.set(alias, commandsFile.name));

        }
    })

    console.log(`${count} lệnh đã sẵn sàng!`);
}