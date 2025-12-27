const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const filePath = path.join(__dirname, 'files', 'log.txt');
const randomString = uuidv4();

// Ensure the directory exists
if (!fs.existsSync(path.join(__dirname, 'files'))) {
    fs.mkdirSync(path.join(__dirname, 'files'));
}

setInterval(() => {
    const timestamp = new Date().toISOString();
    const line = `${timestamp}: ${randomString}\n`;
    fs.appendFileSync(filePath, line);
    console.log(`Wrote to file: ${line}`);
}, 5000);
