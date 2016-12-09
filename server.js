const express = require('express');
const path = require('path');

const STATIC_PATH = path.resolve(__dirname, 'build');
const app = express();
app.use(express.static(STATIC_PATH));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(STATIC_PATH, 'index.html'));
});

app.listen(7000, function(err) {
  console.log("server started at 7000 port");
});
