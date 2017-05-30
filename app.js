const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Page coming soon');
})

app.listen('8080', () => {
  console.log('Live at http://localhost:8080');
})
