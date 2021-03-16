const Author = require('../DB/Models/Authors');


const getAuthors = async () => await Author.find({});
const getAuthor = async (id) => await Author.findById(id);
const getAuthorName = async (name) => await Author.findOne({name: name});


module.exports ={ getAuthors }