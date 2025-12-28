const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

postgres://postgres:example@postgres-svc:5432/postgres;
UPDATE counters SET value = value + 1;

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
