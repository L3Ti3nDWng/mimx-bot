const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');
const slashcommands = require('./handlers/slashcommands');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();

['command', 'event', 'slashcommands'].forEach(handlers => require(`./handlers/${handlers}`)(client));

client.login(token)