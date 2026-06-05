const express = require('express');
const app = express();
let todos = [];

app.use(express.json());

app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  todos.push(req.body.task);
  res.json({ message: 'Task add' });
});

app.listen(3000, () => console.log('web page running on port 3000'));
module.exports = app;
