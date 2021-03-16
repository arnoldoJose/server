const express = require('express');
const app = express();
const session = require('express-session');

const path = require('path');
let bodyParser = require('body-parser');
const Cors = require('cors');
const { conectionDB } = require('./DB/DBConnect');
require('./Config/config');
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

app.listen(process.env.PORT, () => console.log("server online"));