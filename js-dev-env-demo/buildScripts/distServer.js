import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
// import cors from 'cors';

/* eslint-disable no-console */

const port = 8088;
const app = express();
// app.use(cors());
app.set('port', (process.env.PORT || port));

// enable to the gzip compression & serving static from the dist folder.
app.use(compression({threshold : 512})) //enable compression; adapt threshold (in bytes) to your needs
app.use(express.static('dist'));

// any call to root (/)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// DATABASE - this would be a real [production] database route here...
// app.get("/users", function (req, res) {
//  res.json([
//    {"id": 1,"firstName":"Bobby","lastName":"Landin","email":"bobbyl@production.com"},
//    {"id": 2,"firstName":"Tammy","lastName":"Lee","email":"lee.tiger@production.com"},
//    {"id": 3,"firstName":"Tiger","lastName":"Woods","email":"woodstiger2@production.com"}
//  ]);
//});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
