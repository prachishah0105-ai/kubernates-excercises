const axios = require('axios');

app.get('/', async (req, res) => {
  await fetchImage(); // Your 1.12 logic
  
  // Fetch todos from the BACKEND SERVICE
  const response = await axios.get(process.env.BACKEND_URL + "/todos");
  const todos = response.data;

  res.send(`
    <h1>Todo App</h1>
    <img src="/files/image.jpg" width="400" />
    <form action="/todos" method="POST">
      <input type="text" name="todo" maxlength="140">
      <button type="submit">Create TODO</button>
    </form>
    <ul>
      ${todos.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `);
});
