const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// This path MUST match the mountPath in your deployment.yaml
const filePath = path.join('/', 'usr', 'src', 'app', 'files', 'log.txt');

app.get('/', (req, res) => {
    try {
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            res.send(`<h1>Log Output</h1><pre>${content}</pre>`);
        } else {
            res.send('Waiting for logs... (File not found at ' + filePath + ')');
        }
    } catch (err) {
        res.status(500).send('Error reading log file');
    }
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
