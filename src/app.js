require('dotenv').config()

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const {DisTube} = require('distube');

const interactionCreate = require('./events/interactionCreate');
const commandHandler = require('./handlers/commandHandler');
const ready = require('./events/ready');
const keepAlive = require('./server');

const { TOKEN } = process.env

const client = new Client(
  {
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.MessageContent]
  }
)

client.distube = new DisTube(client, {
  leaveOnStop: false,
  leaveOnFinish: true,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
})

client.commands = new Collection();
commandHandler(client);
interactionCreate(client);

ready(client);
client.login(TOKEN);
keepAlive();