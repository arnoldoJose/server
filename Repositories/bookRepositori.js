
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
const addBook = (bk,path) => new Book({name:bk.name,autor:bk.autor,descripcion:bk.descripcion,categoria:bk.categoria,editorial:bk.editorial,book_cover: path,amount:bk.amount,});
const updateBook = async (id) => await Book.findByIdAndUpdate(id)
const eleminatedBook =  (id) =>  Book.findByIdAndDelete(id);//quitar asing

module.exports = {addBook,getBooks,getBook,updateBook,getName,getNameAndCategory,eleminatedBook};
