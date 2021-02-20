var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World , welcome to my jenkis world & docker world & aws worlds. vernost aws service provider");
});

app.listen(4000);
