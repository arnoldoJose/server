require("dotenv").config({ path: "development.env" });

process.env.HOST = process.env.HOST || 'http://localhost'
process.env.PORT = process.env.PORT || 4000;
process.env.DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/library'
module.exports = {
  key: process.env.TOKEN_KEY,
  expirate: process.env.EXPIRATE_TOKEN,
  accountSid: process.env.TWILIO_ACCOUNT_SID,
 authToken: process.env.TWILIO_AUTH_TOKEN
};