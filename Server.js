const express = require("express");
const app = express();
const session = require("express-session");
const Cors = require("cors");
const { conectionDB } = require("./DB/DBConnect");

require("./Config/config");

  app.use(Cors());

  app.use(
    session({
      secret: "secrexxx12",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: true },
    })
  );

  conectionDB();
  
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));

  app.use(require("./Routes/Routes"));

  app.listen(process.env.PORT, () => console.log("server online"));