//below is old style syntax...
// var express = require('express');
// var path = require('path');
// var open = require('open');
//but since now using babel-node can use the newer syntax
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

//the above will disable the eslint rule of giving messages about there being console.log statements

//below is old style syntax...
//var port = 3000;
//var app = express();
//but since now using babel-node can use the newer syntax
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
