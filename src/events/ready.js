const { Events } = require ('discord.js');

module.exports = (client) => {
  client.once(Events.ClientReady, cli => {
    console.log(`${cli.user.username} está ON!!!`)
  })
}