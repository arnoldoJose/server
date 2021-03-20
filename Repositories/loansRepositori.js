const Loans = require('../DB/Models/Loans');

const getRepositoriLoans = async () => await Loans.find({ reservation_state: "assigned", return_state: "not-assigned"});
const getReturnLoan = async () => await Loans.find({return_state: "not-assigned"});
const getAllReservetaions = async () =>  await Loans.find({ reservation_state: "not-assigned" });
const createLoans = () => new Loans();

module.exports = { createLoans, getRepositoriLoans,getReturnLoan, getAllReservetaions };