//below is old style syntax...
// var express = require('express');
// var path = require('path');
// var open = require('open');
//but since now using babel-node can use the newer syntax
import express from 'express';
import path from 'path';
import open from 'open';

//below is old style syntax...
//var port = 3000;
//var app = express();
//but since now using babel-node can use the newer syntax
const port = 3000;
const app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
