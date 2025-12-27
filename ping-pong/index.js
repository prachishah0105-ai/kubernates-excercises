const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// The shared directory in the volume
const dir = path.join('/', 'usr', 'src', 'app', 'files');
const filePath = path.join(dir, 'pong.txt');

// Ensure directory exists
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Initial count
let counter = 0;
if (fs.existsSync(filePath)) {
    counter = parseInt(fs.readFileSync(filePath, 'utf8')) || 0;
}

app.get('/pingpong', (req, res) => {
    counter++;
    fs.writeFileSync(filePath, counter.toString()); // Save to Persistent Volume
    res.send(`pong ${counter}`);
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
