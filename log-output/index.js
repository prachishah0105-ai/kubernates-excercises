const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const logPath = path.join('/', 'usr', 'src', 'app', 'files', 'log.txt');
const pongPath = path.join('/', 'usr', 'src', 'app', 'files', 'pong.txt');

app.get('/', (req, res) => {
    const logs = fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : 'No logs yet.';
    const pongs = fs.existsSync(pongPath) ? fs.readFileSync(pongPath, 'utf8') : '0';
    
    // Output required by exercise 1.11
    res.send(`
        <p>${logs}</p>
        <p>Ping / Pongs: ${pongs}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
