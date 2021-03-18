
const { createLoans } = require('../../Repositories/loansRepositori');

const createLoan = (req,res) => {

const { name_user, mobile_user, image_book, name_book, return_loan } = req.body;
  const loan = createLoans();
  loan.name_book = name_book;
  loan.image_book = book_cover;
  loan.name_user = name_user;
  loan.mobile_user = mobile_user;
  loan.date_loan = new Date().toLocaleString();
  loan.return_date = return_loan;
//crear otro campo llamado cantidad

  loan.save();

  res.json( loan );

}

module.exports = { createLoan };