require('dotenv').config()

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const interactionCreate = require('./events/interactionCreate');
const ready = require('./events/ready');
const commandHandler = require('./handlers/commandHandler');
const { TOKEN } = process.env

const client = new Client(
  {
    intents: GatewayIntentBits.Guilds
  }
)

client.commands = new Collection();
commandHandler(client);
interactionCreate(client);

ready(client);
client.login(TOKEN);