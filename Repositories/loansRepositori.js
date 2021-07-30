const Loans = require('../DB/Models/Loans');
//quitar el return state para el get repositori y para el get return
const getRepositoriLoans = async () => await Loans.find({ reservation_state: "assigned" });
const getReturnLoan = async () => await Loans.find({ return_state: "not-assigned",reservation_state: "assigned" });
const getReturnLoanName = async (names) => await Loans.find({ name_user: names,reservation_state: "assigned",return_state: "not-assigned"});
const getAllReservetaions = async () =>  await Loans.find({ reservation_state: "not-assigned" });
const reservationName = async (user) => await Loans.find({ name_user: user, reservation_state: "not-assigned" });
const updateLoanId = async (id) => await Loans.findByIdAndUpdate(id);
const updateIdReservation = async (id) => await Loans.findByIdAndUpdate(id);
const deleteLoanId = async (id) => await Loans.findByIdAndDelete(id);
const createLoanAd = () => new Loans(); 

const getLoansUser = async (id) => {  
  if(id){
    return await Loans.find({ user_id: id, return_state: "not-assigned", reservation_state: "assigned" });
  }
}

const createLoans = (
  {
    book_id,
    user_id,
    name_book,
    image_book,
    name_user,
    mobile_user,
    return_loan,
  },fecha) =>
  new Loans({
    book_id: book_id,
    user_id: user_id,
    name_book: name_book,
    image_book: image_book,
    name_user: name_user,
    mobile_user: mobile_user,
    date_loan: fecha,
    return_date: return_loan,
  });



module.exports = {
  createLoans,
  getRepositoriLoans,
  getReturnLoan,
  getReturnLoanName,
  getAllReservetaions,
  reservationName,
  updateLoanId,
  updateIdReservation,
  deleteLoanId,
  getLoansUser,
  createLoanAd,
};