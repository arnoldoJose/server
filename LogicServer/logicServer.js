const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const session = require("express-session");
let bodyParser = require("body-parser");
const Cors = require("cors");
const Socket = require('../Socket/socket');
const { conectionDB } = require("../DB/DBConnect");
require("../Config//config");

class Server {
  constructor() {
    this.app = express();
    
    this.server = http.createServer(this.app);
    this.io = socketio( this.server,{});
  }
  
  middlewares () {
    app.use(Cors());
    
    this.app.use(
      session({
        secret: "secrexxx12",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true },
      })
    );
    conectionDB();
    
    app.use(bodyParser.json());
    
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(require("./Routes/Routes"));

  }

  configurarSocket () {
    new Socket( this.io );
  }

  execute() {

    this.middlewares();
    this.server.listen(process.env.PORT, () => console.log("server online"));
  
  }
}

module.exports = Server;
// app.use(express.static(path.join(__dirname, "storage/image")));
