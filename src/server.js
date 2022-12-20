const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('STATUS [OK]');
});

function keepAlive() {
  server.listen(3000, () => {
    console.log('Servidor ligado!');
  });
}

module.exports = keepAlive;
