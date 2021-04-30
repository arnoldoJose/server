const createLoans = require('./createLoans/createLoans');
const getAllLoans = require("./getLoans/getLoans");
const updateLoans = require('./updateLoans/updateLoans');
const deleteLoan = require('./deleteLoans/deleteLoans');
module.exports = { createLoans, getAllLoans, updateLoans,deleteLoan }