const Loans = require('../DB/Models/Loans');

const getRepositoriLoans = async () => await Loans.find({ reservation_state: "assigned", return_state: "not-assigned"});
const getReturnLoan = async () => await Loans.find({return_state: "not-assigned",  reservation_state: "assigned"});
const getReturnLoanName = async (names) => await Loans.find({ name_user: names});

const getAllReservetaions = async () =>  await Loans.find({ reservation_state: "not-assigned" });
const reservationName = async (user) => await Loans.find({ name_user: user, reservation_state: "not-assigned" });

const createLoans = () => new Loans();

module.exports = {
  createLoans,
  getRepositoriLoans,
  getReturnLoan,
  getReturnLoanName,
  getAllReservetaions,
  reservationName,
};