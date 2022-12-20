const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Desconecta do canal de voz atual.'),
  async execute(client, interaction) {
  
    await client.distube.voices.leave(interaction.guild);
    await interaction.reply('Até mais!');
  },
};
