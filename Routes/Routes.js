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
const { createLoans, getAllLoans,updateLoans,deleteLoan } = require('../CaseLoans/loansController');
//Route  Loans
route.get("/get/loans", getAllLoans.getLoans );
//----------------------------------------------

route.get("/get/returns", getAllLoans.getReturns);
route.get("/get/return",getAllLoans.getReturnName);

//-----------------------------------------------
route.get("/get/reservations",getAllLoans.getReservetaions);
route.get("/get/reservation",getAllLoans.getReservationName);
//------------------
route.get("/get/user/loans",getAllLoans.getAllUserLons);


//-----------
route.post("/delete/loan/:id",deleteLoan.eleminatedLoan);


route.post("/admin/loan",createLoans.createAdminLoan);
route.put("/update/loan/:id",updateLoans.updateLoan);
route.post("/update/reservation/:id",updateLoans.updateReservation);
//case Admin
const { registerUser,loginUser } = require('../CaseAdmin/adminController');
//routes Admin
route.post("/register",registerUser.register );
route.post("/login", loginUser.login);

//case user
const  { userRegister,userLogin } = require('../CaseUser/userController');
//routes user
route.post("/register/user",userRegister.register);
route.post("/login/user",userLogin.login);

//
const { sendMessage } = require('../twiliosms/sendSms');
const { getLoans } = require('../CaseLoans/getLoans/getLoans');
//enviando mensajes
route.post("/send/message", sendMessage)
module.exports = route;