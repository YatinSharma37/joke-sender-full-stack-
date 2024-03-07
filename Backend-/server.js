const express = require('express');
const app = express();

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 2,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 3,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 4,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 5,
      title: 'A joke',
      content: 'This is a joke'
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
