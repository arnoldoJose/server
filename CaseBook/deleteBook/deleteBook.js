
const { eleminatedBook } = require('../../Repositories/bookRepositori');

const bookDelete = async (req,res) => {

  let { id } = req.params;

 let data = await eleminatedBook(id);


 res.json(data);
}



module.exports = { bookDelete }
