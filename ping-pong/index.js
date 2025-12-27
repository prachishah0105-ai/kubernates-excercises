const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let counter = 0;

// This endpoint is for the user/browser
app.get('/pingpong', (req, res) => {
    counter++;
    res.send(`pong ${counter}`);
});

// NEW: This endpoint is for the Log Output app to call internally
app.get('/pongs', (req, res) => {
    res.json({ pongs: counter });
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
