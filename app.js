var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World , welcome to my jenkis world. ");
});

app.listen(4000);
