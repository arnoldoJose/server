const Loans = require('../DB/Models/Loans');

const getRepositoriLoans = async () => await Loans.find({ reservation_state: "assigned",return_state: "assigned"});
const getReturnLoan = async () => await Loans.find({return_state: "not-assigned",  reservation_state: "assigned"});
const getReturnLoanName = async (names) => await Loans.find({ name_user: names,reservation_state: "assigned",return_state: "not-assigned"});

const getAllReservetaions = async () =>  await Loans.find({ reservation_state: "not-assigned" });
const reservationName = async (user) => await Loans.find({ name_user: user, reservation_state: "not-assigned" });

const createLoans = () => new Loans();
const updateLoanId = async (id) => await Loans.findByIdAndUpdate(id);
const updateIdReservation = async (id) => await Loans.findByIdAndUpdate(id);
const deleteLoanId = async (id) => await Loans.findByIdAndDelete(id);

module.exports = {
  createLoans,
  getRepositoriLoans,
  getReturnLoan,
  getReturnLoanName,
  getAllReservetaions,
  reservationName,
  updateLoanId,
  updateIdReservation,
  deleteLoanId
};