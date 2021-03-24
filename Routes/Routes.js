const route = require('express').Router();
const upload = require('../Config/uploadFile');
// const auth = require('../Middleware/auth/auth');

//Book CASE
const { createBook, getBook, updateBook } = require('../CaseBook/bookController');
//Routes Book
route.get("/get/books", getBook.getAllBooks);

route.get("/get/book/:id",getBook.getOneBook);

route.get("/get/book", getBook.getBookName);

route.get("/get/categorybook",getBook.getBookCategoryAndName);

route.post("/create/book",[upload.single("image")],createBook.create );

route.put("/update/book/:id", [upload.single("image")],updateBook.update );



//Authors Case
const { getAuthor } = require('../CaseAuthor/authorController');
//Route Authors
route.get("/get/authors", getAuthor.getAllAuthors);



//Loans Case
const { createLoans, getAllLoans } = require('../CaseLoans/loansController');
//Route  Loans
route.get("/get/loans", getAllLoans.getLoans );
route.get("/get/returns", getAllLoans.getReturns);
route.get("/get/reservations",getAllLoans.getReservetaions);

route.post("/create/loan", createLoans.createLoan );
route.post("/admin/loan",createLoans.createAdminLoan);

//case Admin
const { registerUser,loginUser } = require('../CaseAdmin/adminController');
//routes Admin
route.post("/register",registerUser.register );
route.post("/login", loginUser.login);
module.exports = route;