const mongoose = require('mongoose');
require('dotenv').config({path:'development.env'})

// "mongodb://localhost:27017/library"
// process.env.DB_URL,

const conectionDB = () => {
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("MongoDB Connection Succeeded.");
      } else {
        console.log("Error in DB connection: " + err);
      }
    }
  );
};
module.exports = { conectionDB };