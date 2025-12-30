const express = require('express');
const axios = require('axios'); // You must add axios to package.json
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const timestamp = new Date().toISOString();
    const randomString = process.env.RANDOM_STRING || "no-string-set";

    try {
        // Use the SERVICE NAME 'ping-pong-svc' and the PORT '2345'
        const response = await axios.get('http://ping-pong-svc:2345/pongs');
        const pongs = response.data.pongs;

        res.send(`${timestamp}: ${randomString}. Ping / Pongs: ${pongs}`);
    } catch (error) {
        res.send(`${timestamp}: ${randomString}. Ping / Pongs: Error fetching pongs`);
    }
    // Log-output health check
app.get('/healthz', async (req, res) => {
  try {
    // We try to ping the Ping-pong service using its internal Kubernetes DNS
    const response = await axios.get('http://pingpong-svc:80/healthz');
    if (response.status === 200) {
      res.status(200).send('OK');
    } else {
      res.status(500).send('Ping-pong is not healthy');
    }
  } catch (err) {
    res.status(500).send('Cannot reach Ping-pong service');
  }
});
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
const fs = require('fs');
const path = require('path');

const message = process.env.MESSAGE; // From ConfigMap env
const filePath = path.join(__dirname, 'config', 'information.txt');
const fileContent = fs.readFileSync(filePath, 'utf8'); // From ConfigMap volume

// In your output logic:
console.log(`file content: ${fileContent}`);
console.log(`env variable: MESSAGE=${message}`);
