const { SlashCommandBuilder, PermissionsBitField  } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Reproduz um áudio pesquisado ou URL do Youtube.')
    .addStringOption((option) =>
      option
        .setName('pesquisar')
        .setDescription('A música que será tocada')
        .setRequired(true)
    ),
  async execute(client, interaction) {
    if (interaction.options.getString('pesquisar')) {
      await interaction.reply(
        `🔍 **Pesquisando por: ** ${interaction.options.getString('pesquisar')}`
      );

      const { channel } = interaction.member.voice;
      if (!channel)
        return interaction.editReply('Você precisa estar em um canal de voz.');
      if (
        !channel
          .permissionsFor(interaction.guild.members.me)
          .has(PermissionsBitField.Flags.Connect)
      )
        return interaction.editReply(
          `Não tenho a permissão \`CONNECT\` em ${channel.name} para me juntar ao canal!`
        );
      if (
        !channel
          .permissionsFor(interaction.guild.members.me)
          .has(PermissionsBitField.Flags.Speak)
      )
        return interaction.editReply(
          `Não tenho a permissão \`SPEAK\` em ${channel.name} para me juntar ao canal!`
        );

      try {
        const string = interaction.options.getString('pesquisar');

        const options = {
          member: interaction.member,
          textChannel: interaction.channel,
          interaction,
        };

        await client.distube.play(
          interaction.member.voice.channel,
          string,
          options
        );
      } catch (e) {
        //
      }
    }
  },
};
