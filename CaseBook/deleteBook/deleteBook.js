
const { eleminatedBook } = require('../../Repositories/bookRepositori');

const bookDelete =  (req,res) => {

  let { id } = req.params;

   eleminatedBook(id);//quitar asing
}



module.exports = { bookDelete }
