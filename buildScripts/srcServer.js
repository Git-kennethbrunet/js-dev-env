// var express = require('express');
// var path = require('path');
// var open = require('open');

// var port = 8088;
// var app = express();

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 8088;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// any call to root (/)
app.get('/', function (req, res) {
  // __dirname holds the directory where the server is run in
  res.sendFile(path.join(__dirname, '..//src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
