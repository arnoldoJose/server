
const { getAuthors } = require('../../Repositories/authorRepositori')

const getAllAuthors = async (req,res) => {

  const authors = await getAuthors();

  res.json({authors});

};

module.exports = { getAllAuthors }

