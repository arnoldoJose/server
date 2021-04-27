const route = require('express').Router();
const upload = require('../Config/uploadFile');
// const auth = require('../Middleware/auth/auth');

//Book CASE
const { createBook, getBook, updateBook,deleteBook } = require('../CaseBook/bookController');
//Routes Book
route.get("/get/books", getBook.getAllBooks);

route.get("/get/book/:id",getBook.getOneBook);

route.get("/get/book", getBook.getBookName);

route.get("/get/categorybook",getBook.getBookCategoryAndName);

route.post("/create/book",[upload.single("image")],createBook.create );

route.put("/update/book/:id", [upload.single("image")],updateBook.update );

route.post("/delete/book/:id",deleteBook.bookDelete);

//Authors Case
const { getAuthor } = require('../CaseAuthor/authorController');
//Route Authors
route.get("/get/authors", getAuthor.getAllAuthors);



//Loans Case
const { createLoans, getAllLoans,updateLoans } = require('../CaseLoans/loansController');
//Route  Loans
route.get("/get/loans", getAllLoans.getLoans );
//----------------------------------------------

route.get("/get/returns", getAllLoans.getReturns);
route.get("/get/return",getAllLoans.getReturnName);

//-----------------------------------------------
route.get("/get/reservations",getAllLoans.getReservetaions);
route.get("/get/reservation",getAllLoans.getReservationName);

route.post("/admin/loan",createLoans.createAdminLoan);
route.put("/update/loan/:id",updateLoans.updateLoan);
route.put("/update/reservation/:id",updateLoans.updateReservation);
//case Admin
const { registerUser,loginUser } = require('../CaseAdmin/adminController');
//routes Admin
route.post("/register",registerUser.register );
route.post("/login", loginUser.login);

//
const { sendMessage } = require('../twiliosms/sendSms');
//enviando mensajes
route.post("/send/message", sendMessage)
module.exports = route;