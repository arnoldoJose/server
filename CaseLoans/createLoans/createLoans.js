
const { createLoanAd, createLoans } = require('../../Repositories/loansRepositori');
const { quitOneBook } = require('../funtionaLoans');

const createAdminLoan = (req,res,io,emitMessage) => {

  let year = new Date().getFullYear(),month = new Date().getMonth()+1;
  let fecha = `${year}-${(month <= 9)? ("0"+month) : (month)}-${(new Date().getDate() <= 9)? ("0"+new Date().getDate()) : (new Date().getDate())}`;

  const { name_user,mobile_user,image_book,name_book,return_loan,book_id,user_id} = req.body;

  const loan = createLoanAd();
  loan.book_id = book_id;
  loan.user_id = user_id;
  loan.name_book = name_book;
  loan.image_book = image_book;
  loan.name_user = name_user;
  loan.mobile_user = mobile_user;
  loan.date_loan = fecha;
  loan.return_date = return_loan;
  loan.reservation_state = "assigned";
   
  quitOneBook(loan,book_id,res);
  emitMessage(io, "prestamo", "Prestamo", loan.name_book);
};

const createReservation = (req,res,io,emitMessage) => {

    let year = new Date().getFullYear(),
      month = new Date().getMonth() + 1,
      day = new Date().getDate();
    let fecha = `${year}-${month <= 9 ? "0" + month : month}-${
      day <= 9 ? "0" + day : day
    }`;
   
    const loan = createLoans(req.body,fecha);
    loan.save();
    res.json(loan);
  
    emitMessage(io,"envio","Reservacion",loan.name_book);
}


module.exports = { createAdminLoan, createReservation };
