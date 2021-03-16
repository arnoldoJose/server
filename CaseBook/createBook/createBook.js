const { createBook } = require("../../Repositories/bookRepositori");

const create = (req,res) => {

  let {name,autor,editorial,descripcion,categoria} = req.body;
  
  let book = createBook();
  book.name = name;
  book.autor = autor;
  book.descripcion = descripcion;
  book.categoria = categoria;
  book.editorial = editorial;
  book.imageUpload(req.file.filename);

  book.save();
  
  res.json({ book });

}

module.exports = { create };