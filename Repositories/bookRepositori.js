
const Book  = require('../DB/Models/Books');

//getsBooks
const getBooks = async () => await Book.find();
const getBook = async (id) => await Book.findById(id);
const getName = async (nameBook) => await Book.find({ name: nameBook});
const getNameAndCategory = async (bookName,category) =>{

  if(bookName && category){
   return await Book.find({name: bookName,categoria:category});
  }else{
    return await Book.find({categoria: category });
  }

};

//
const createBook = () => new Book();
const updateBook = async (id) => await Book.findByIdAndUpdate(id)

module.exports = {createBook,getBooks,getBook,updateBook,getName,getNameAndCategory};
