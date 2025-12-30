const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let todos = ['Learn Kubernetes', 'Build a backend']; // Initial data

// GET: Send the list to the frontend
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST: Receive a new todo from the frontend
app.post('/todos', (req, res) => {
  const newTodo = req.body.todo;
  // 1. Check if the todo exceeds 140 characters
  if (todo && todo.length > 140) {
    // 2. Log a specific "Rejected" message to stdout
    // Promtail will send this console.error to Loki automatically
    console.error(`Rejected todo: "${todo.substring(0, 15)}..." Reason: Too long (${todo.length} chars)`);
    
    // 3. Return a 400 Bad Request to the client
    return res.status(400).send("Todo is too long (max 140 characters).");
  }
  if (newTodo && newTodo.length <= 140) {
    todos.push(newTodo);
    res.status(201).send('Todo added');
  } else {
    // Exercise 4.2: Health check for Todo-backend
app.get('/healthz', async (req, res) => {
  try {
    // This ensures the backend only becomes READY when the DB is connected
    // Ensure you have your pool/db client initialized as you did in ping-pong
    await pool.query('SELECT 1'); 
    res.status(200).send('OK');
  } catch (err) {
    console.error('Database connection failed');
    res.status(500).send('Not Ready');
  }
});
    res.status(400).send('Invalid todo');
  }
});

app.listen(PORT, () => {
  const PORT = process.env.PORT || 3000; app.listen(PORT);
});
