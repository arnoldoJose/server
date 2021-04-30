const { deleteLoanId } = require('../../Repositories/loansRepositori');


const eleminatedLoan = async (req,res) => {

  let { id } = req.params;

  let data = await deleteLoanId(id);

  res.json(data);

}

module.exports = { eleminatedLoan };