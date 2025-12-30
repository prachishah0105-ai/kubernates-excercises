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
// Add this for Exercise 4.1
app.get('/healthz', async (req, res) => {
  try {
    // This part tries to talk to your database
    // Ensure 'pool' or your database client is defined above
    await pool.query('SELECT 1'); 
    res.status(200).send('OK');
  } catch (err) {
    // If the database is not ready, we send a 500 error
    console.error('Health check failed: Database not reachable');
    res.status(500).send('Not Ready');
  }
});
app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
