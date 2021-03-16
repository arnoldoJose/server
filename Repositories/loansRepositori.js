const Loans = require('../DB/Models/Loans');

const getRepositoriLoans = async() => await Loans.find();
const createLoans = () => new Loans();

module.exports = { createLoans, getRepositoriLoans };