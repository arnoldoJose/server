
const { createLoans } = require('../../Repositories/loansRepositori');

const createAdminLoan = (req, res) => {

  let year = new Date().getFullYear(),month = new Date().getMonth()+1, day = new Date().getDate();
  let fecha = `${year}-${(month <= 9)? ("0"+month) : (month)}-${(day <= 9)? ("0"+day) : (day)}`;

  const { name_user,mobile_user,image_book,name_book,return_loan} = req.body;

  const loan = createLoans();
  loan.name_book = name_book;
  loan.image_book = image_book;
  loan.name_user = name_user;
  loan.mobile_user = mobile_user;
  loan.date_loan = fecha;
  loan.return_date = return_loan;
  loan.reservation_state = "assigned";

  res.json(loan);
  
  loan.save();
};

module.exports = { createAdminLoan };

//crear otra ruta para crear prestamos directos 
//desde la pagina del administrador y los campos
//reservation_state este en true y return_state tambien en true