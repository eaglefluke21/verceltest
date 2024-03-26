import express from 'express';

const app = express();
const PORT = process.env.PORT;

console.log('server is running');

// Route to display a message when accessing the root URL
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`You can access the server at http://localhost:${PORT}`);
});
