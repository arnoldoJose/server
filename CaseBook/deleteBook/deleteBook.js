
const { eleminatedBook } = require('../../Repositories/bookRepositori');

const bookDelete = async (req,res) => {

  let { id } = req.params;

  await eleminatedBook(id);
}



module.exports = { bookDelete }
