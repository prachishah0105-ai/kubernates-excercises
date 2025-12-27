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
  if (newTodo && newTodo.length <= 140) {
    todos.push(newTodo);
    res.status(201).send('Todo added');
  } else {
    res.status(400).send('Invalid todo');
  }
});

app.listen(PORT, () => {
  console.log(`Backend started on port ${PORT}`);
});
