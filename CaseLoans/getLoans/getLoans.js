
const {
  getRepositoriLoans,
  getReturnLoan,
  getReturnLoanName,
  getAllReservetaions,
  reservationName,
} = require("../../Repositories/loansRepositori");

const getLoans = async (req,res) => {
  let data = await getRepositoriLoans();
  res.json(data);
}

const getReturns = async (req,res) => {
  let data = await getReturnLoan();
  res.json(data);
}

const getReturnName = async (req,res) => {

  let {name} = req.query;
  let nameRegx = new RegExp(name,'i');

  let data = await getReturnLoanName(nameRegx);
 
  if(!data.length){
    res.json({message: "el usuario no existe"})
  }else{
     res.json(data);
  }
}

const getReservetaions = async (req,res) => {
  let data = await getAllReservetaions();
  res.json(data);
}

const getReservationName = async (req,res) => {
  let {name} = req.query;

  let namereg = new RegExp(name,'i');
  let data = await reservationName(namereg);

  if(!data.length){
    res.json({message: "el usuario no existe"})
  }else{
    res.json(data);
  }

}

module.exports = {
  getLoans,
  getReturns,
  getReservetaions,
  getReturnName,
  getReservationName,
};