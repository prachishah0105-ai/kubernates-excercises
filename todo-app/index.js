const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios'); // You will need to add axios to package.json
const app = express();
const PORT = process.env.PORT || 3000;

const dir = path.join('/', 'usr', 'src', 'app', 'files');
const imagePath = path.join(dir, 'image.jpg');

// Function to check if image is older than 10 minutes
const isImageOld = () => {
  if (!fs.existsSync(imagePath)) return true;
  const stats = fs.statSync(imagePath);
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
  return stats.mtime < tenMinutesAgo;
};

// Function to download a new image
const fetchImage = async () => {
  if (isImageOld()) {
    console.log('Fetching a new image...');
    const response = await axios.get('https://picsum.photos/1200', { responseType: 'stream' });
    response.data.pipe(fs.createWriteStream(imagePath));
  }
};

app.get('/', async (req, res) => {
  await fetchImage();
  res.send(`
    <h1>Todo App</h1>
    <img src="/files/image.jpg" width="400" />
    <form><input type="text"><button>Create TODO</button></form>
  `);
});
app.get('/', async (req, res) => {
  await fetchImage();
  
  // Hardcoded list of todos
  const todos = ['Work on Kubernetes exercise', 'Finish the project', 'Deploy to cluster'];

  res.send(`
    <h1>Todo App</h1>
    <img src="/files/image.jpg" width="400" />
    
    <div style="margin-top: 20px;">
      <form>
        <input type="text" maxlength="140" placeholder="Type your todo here...">
        <button type="submit">Create TODO</button>
      </form>
    </div>

    <ul style="margin-top: 20px;">
      ${todos.map(todo => `<li>${todo}</li>`).join('')}
    </ul>
  `);
});

// Serve the image file so the browser can see it
app.use('/files', express.static(dir));

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
