const { updateLoanId,updateIdReservation } = require('../../Repositories/loansRepositori');
const updateLoan = async (req,res) => {

  let { id } = req.params;

  let data = await updateLoanId(id);
  data.return_state = "assigned";
  data.save();

  res.json({message: "El libro a sido devuelto"});
}

const updateReservation = async (req,res) => {

  let { id } = req.params;

  let data = await updateIdReservation(id);
  data.reservation_state = "assigned";
  data.save();

  res.json({message: 'El prestamo a sido asignado'});
}

module.exports = { updateLoan, updateReservation }

