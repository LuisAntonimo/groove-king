const fs = require('fs');
const path = require('node:path');

module.exports = (client) => {
  const commandsPath = path.join('./src/commands');
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(`../commands/${file}`);

    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[AVISO] O comando em ${filePath} não possui uma propriedade "data" ou "execute"`
      );
    }
  }
};
