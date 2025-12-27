const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// NEW FOR 1.5: Respond to a GET request at the / URL
app.get('/', (req, res) => {
  res.send('<h1>Todo App</h1><p>Welcome! This is the project responding to a GET request.</p>');
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
