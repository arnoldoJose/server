const Loans = require('../DB/Models/Loans');

const getRepositoriLoans = async () => await Loans.find({ reservation_state: "not-assigned" });
const createLoans = () => new Loans();

module.exports = { createLoans, getRepositoriLoans };