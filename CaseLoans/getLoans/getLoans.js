
const { getRepositoriLoans } = require("../../Repositories/loansRepositori");

const getLoans = async (req,res) => {

  let data = await getRepositoriLoans();

  res.json({data});
}

module.exports = { getLoans };