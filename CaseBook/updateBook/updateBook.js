
const { updateBook } = require('../../Repositories/bookRepositori');
const fse = require('fs-extra');

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "deqdnvs2k",
  api_key: "333499587651297",
  api_secret: "vQZ-5tTbmiHBH9D1PzXBYwy-4Uc",
});


const update = async (req,res) => {

  let { id } = req.params;
  let bookUpdate = await updateBook(id);

  if(req.file){

     let data = await cloudinary.uploader.upload(req.file.path);

    bookUpdate.name = req.body.name;
    bookUpdate.autor = req.body.autor;
    bookUpdate.editorial = req.body.editorial;
    bookUpdate.categoria = req.body.categoria;
    bookUpdate.descripcion = req.body.descripcion;
    bookUpdate.amount = req.body.amount;
    bookUpdate.book_cover = data.url;

    res.json({ bookUpdate });
    bookUpdate.save();

    fse.unlinkSync(req.file.path);

  }else{
    bookUpdate.name = req.body.name;
    bookUpdate.autor = req.body.autor;
    bookUpdate.editorial = req.body.editorial;
    bookUpdate.categoria = req.body.categoria;
    bookUpdate.descripcion = req.body.descripcion;
    bookUpdate.amount = req.body.amount;

    res.json({ bookUpdate });
    bookUpdate.save();
  }

}

module.exports = { update }