
const { getRepositoriLoans, getReturnLoan, getAllReservetaions } = require("../../Repositories/loansRepositori");

const getLoans = async (req,res) => {
  let data = await getRepositoriLoans();
  res.json({data});
}

const getReturns = async () => {
  let data = await getReturnLoan();
  res.json({data});
}

const getReservetaions = async () => {
  let data = await getAllReservetaions();
  res.json({data});
}

module.exports = { getLoans, getReturns, getReservetaions };