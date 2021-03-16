
const { updateBook } = require('../../Repositories/bookRepositori');


const update = async (req,res) => {

  let { id } = req.params;

  let bookUpdate = await updateBook(id);
  bookUpdate.name = req.body.name;
  bookUpdate.autor = req.body.autor;
  bookUpdate.editorial = req.body.editorial;
  bookUpdate.fecha = new Date();
  bookUpdate.imageUpload(req.file.filename);

  res.json({ bookUpdate });
  
  bookUpdate.save();


}

module.exports = { update }