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
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
