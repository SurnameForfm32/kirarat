const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  await axios.post('https://discord.com/api/webhooks/1357413546534768870/lxuFJCUHsa1FdwLkomBEdF77gFiWQrtcgTCbGsZmDo-N73Da5giayiVb3bCCcAoF6jpZ', {
    content: `📥 New visit from IP: ${ip}`,
  });
  res.send('Visit logged.');
});

app.listen(3000, () => console.log('Running on port 3000'));
