const Loans = require('../DB/Models/Loans');

const getRepositoriLoans = async () => await Loans.find({ reservation_state: "assigned" });
const getReturnLoan = async () => await Loans.find({return_state: "not-assigned"});
const getAllReservetaions = async () =>  await Loans.find({ reservation_state: "not_assigned" });
const createLoans = () => new Loans();

module.exports = { createLoans, getRepositoriLoans,getReturnLoan, getAllReservetaions };