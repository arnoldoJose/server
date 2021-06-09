const { updateLoanId,updateIdReservation } = require('../../Repositories/loansRepositori');
const { getBook } = require('../../Repositories/bookRepositori');
const { incrementOneBook,quitOneBookReservation } = require('../funtionaLoans');
const { asignedDate } = require("../funtionaLoans");

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
  let { bookI } = req.query;
  let data = await updateIdReservation(id);
  let datos = await getBook(bookI);

  let month = new Date().getMonth();
  let fecha = `${new Date().getFullYear()}-${(month <= 9) ? ('0'+month) : (month)}-${asignedDate()}`;
 
 if(datos.amount){
   data.reservation_state = "assigned";
   data.return_date = fecha;
   quitOneBookReservation(datos._id);
   data.save();  
   res.json({message: 'la reservacion a sido asignada'});
 }else{
   res.json({ messageError: "Libro aun no disponible" });
 }

}

module.exports = { updateLoan, updateReservation }

