const { updateLoanId,updateIdReservation } = require('../../Repositories/loansRepositori');
const { incrementOneBook,quitOneBookReservation } = require('../funtionaLoans');

const updateLoan = async (req,res) => {

  let { id } = req.params;
  
  let data = await updateLoanId(id);
  data.return_state = "assigned";
  incrementOneBook(data.book_id);
  data.save();
  

  res.json({message: "El libro a sido devuelto"});
}

const updateReservation = async (req,res) => {

  let { id } = req.params;

  let data = await updateIdReservation(id);
  data.reservation_state = "assigned";
  quitOneBookReservation(data.book_id);
  data.save();

  res.json({message: 'la reservacion a sido asignada'});
}

module.exports = { updateLoan, updateReservation }

