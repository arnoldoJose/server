
const {
  getRepositoriLoans,
  getReturnLoan,
  getReturnLoanName,
  getAllReservetaions,
  reservationName,
  getLoansUser
} = require("../../Repositories/loansRepositori");

const { getBook } = require('../../Repositories/bookRepositori');

const getLoans = async (req,res) => {
  let data = await getRepositoriLoans();
  console.log(req.usuario);
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
  //buscar el libro con el bookId
  //y retornar solo la propiedad amout
  let data = await getAllReservetaions();

  res.json(data)
}


const getReservationName = async (req,res) => {
  let {name} = req.query;

  let namereg = new RegExp(name,'i');
  let filter = await reservationName(namereg);
  let data = [];

  try {
    if (!filter.length) {
      res.json({ message: "el usuario no existe" });
    } else {
      for (const dt of filter) {
        let result = await getBook(dt.book_id);
        if (dt.book_id == result._id) {
          data.push({ dt, amount: result.amount });
        }
      }
      res.json(data);
    }
  } catch (error) {
    console.log(error);
  }

}

const getReservationFillter = async (req, res) => {
  let filter = await getAllReservetaions();
  let data = [];

  for (const dt of filter) {
    let dat = await getBook(dt.book_id);
    if (dt.book_id == dat._id) {
      data.push({dt, amount: dat.amount });
    }
  }
  res.json(data);
};

const getAllUserLons = async (req,res) => {

  let { id } = req.query;

  let data = await getLoansUser(id);
  res.json(data)
}

module.exports = {
  getLoans,
  getReturns,
  getReservetaions,
  getReturnName,
  getReservationName,
  getReservationFillter,
  getAllUserLons
};