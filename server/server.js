var  express = require('express');
var  path = require('path');
var  bodyParser = require('body-parser');
var  http = require('http');

var app = express();
var server = http.createServer(app);
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './../')));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});

app.listen(3000);
