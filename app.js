const express = require('express');
const app = express();
var path = require('path');

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// public directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
  res.render('index');
})

app.listen('8080', () => {
  console.log('Live at http://localhost:8080');
})
