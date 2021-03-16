const express = require('express');
const app = express();
const session = require('express-session');
let port = 4000;

const path = require('path');
let bodyParser = require('body-parser');
const Cors = require('cors');
const { conectionDB } = require('./DB/DBConnect');

app.use(Cors());

conectionDB();

app.use(session({
  secret: 'secrexxx12',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./Routes/Routes'));

app.use(express.static(path.join(__dirname,'storage/image')));

app.listen(port, () => console.log("server online"));