const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  await axios.post('YOUR_DISCORD_WEBHOOK_URL', {
    content: `📥 New visit from IP: ${ip}`,
  });
  res.send('Visit logged.');
});

app.listen(3000, () => console.log('Running on port 3000'));
