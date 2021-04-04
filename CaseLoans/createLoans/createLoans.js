
const { createLoans } = require('../../Repositories/loansRepositori');

const createLoan = (req,res) => {

const { name_user, mobile_user, image_book, name_book, return_loan } = req.body;
  const loan = createLoans();
  loan.name_book = name_book;
  loan.image_book = image_book;
  loan.name_user = name_user;
  loan.mobile_user = mobile_user;
  loan.date_loan = new Date().toLocaleString();
  loan.return_date = return_loan;
//crear otro campo llamado cantidad
res.json( loan );

loan.save();

}

const createAdminLoan = (req, res) => {
  const { name_user,mobile_user,image_book,name_book,return_loan} = req.body;

  const loan = createLoans();
  loan.name_book = name_book;
  loan.image_book = image_book;
  loan.name_user = name_user;
  loan.mobile_user = mobile_user;
  loan.date_loan = new Date().toLocaleString();
  loan.return_date = return_loan;
  loan.reservation_state = "assigned";

  loan.save();

  res.json(loan);
};

module.exports = { createLoan, createAdminLoan };

//crear otra ruta para crear prestamos directos 
//desde la pagina del administrador y los campos
//reservation_state este en true y return_state tambien en true