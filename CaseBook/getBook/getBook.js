
const { getBooks,getBook,getName,getNameAndCategory } = require('../../Repositories/bookRepositori');

const getAllBooks = async (req,res) => {

  const book = await getBooks();

  res.json( book );
};

const getOneBook = async (req,res) => {
  let { id } = req.params;

  let data = await getBook(id);

  res.json({data});
}

const getBookName = async (req,res) => {

  let { name,autor } = req.query;
 
  let nameReg = new RegExp(name,'i');
  let name_autor = new RegExp(autor, "i");

  let book = await getName(nameReg, name_autor);

  if(!book.length){
    res.json({message: 'el libro no se encuantra'});
  }else{
    res.json({ book });
  }

}

const getBookCategoryAndName = async (req,res) => {

  let {name,category} = req.query;
  let regName = new RegExp(name,'i');

  const book = await getNameAndCategory(regName, category);

  if(!book.length){
    res.json({message: 'el libro no se encuentra'})
  }else{
    res.status(200).json({ book });
  }

}


module.exports = { getAllBooks, getOneBook, getBookName, getBookCategoryAndName };