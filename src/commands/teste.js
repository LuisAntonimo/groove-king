const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello-world')
    .setDescription('Says Hello, World!'),
  async execute(interaction) {
    await interaction.reply('Hello, World! :earth_americas:')
  }
}