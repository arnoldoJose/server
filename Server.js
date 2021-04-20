const express = require("express");
const app = express();
const server = require('http').createServer(app);
const session = require("express-session");
const Cors = require("cors");
const io = require('socket.io')(server);
const { connection, emitMessage } = require("./clasSocket/conectionSocket");
const { conectionDB } = require("./DB/DBConnect");
const { createLoans } = require('./Repositories/loansRepositori');

require("./Config/config");

  app.use(Cors());     

  connection(io);  

  app.use(session({secret: "secrexxx12",resave: false,saveUninitialized: false,cookie: { secure: true },}));
  
  conectionDB();
  
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  
   app.post("/create/loan",(req, res) => {

     let year = new Date().getFullYear(),
       month = new Date().getMonth() + 1,
       day = new Date().getDate();
       let fecha = `${year}-${month <= 9 ? "0" + month : month}-${
       day <= 9 ? "0" + day : day
      }`;

     const { name_user, mobile_user, image_book, name_book, return_loan } = req.body;
     const loan = createLoans();
     loan.name_book = name_book;
     loan.image_book = image_book;
     loan.name_user = name_user;
     loan.mobile_user = mobile_user;
     loan.date_loan = fecha;
     loan.return_date = return_loan;
     
     res.json(loan);

    //  loan.save();
    emitMessage(io,name_book);
   });
  
  app.use(require("./Routes/Routes"));

  server.listen(process.env.PORT, () => console.log("server online"));
