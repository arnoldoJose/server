const mongoose = require('mongoose');

var loansSchema = new mongoose.Schema({
  book_id: {
    type:String,
    required:false
  },
  name_book: {
    type: String,
    required: true,
  },
  image_book: {
    type: String,
    required: false,
  },
  name_user: {
    type: String,
    required: true,

  },
  mobile_user: {
    type: String,
    required: true,
  },
  date_loan: {
    type: String,
    required: false,
  },
  return_date: {
    type: String,
    required: false,
  },
  return_state: {
    type: String,
    default: "not-assigned",
    required: false,
  },
  reservation_state: {
    type: String,
    default: "not-assigned",
    required: false,
  },
});

//Export the model
module.exports = mongoose.model("Loans", loansSchema);