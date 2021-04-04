const { addBook } = require("../../Repositories/bookRepositori");
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
cloudinary.config({
  cloud_name: "deqdnvs2k",
  api_key: "333499587651297",
  api_secret: "vQZ-5tTbmiHBH9D1PzXBYwy-4Uc",
});

const create = async (req,res) => {
   let data = await cloudinary.uploader.upload(req.file.path);
  
    let book = addBook(req.body,data.url);
    
    res.json(book);

    if(fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    
    book.save();
}

module.exports = { create };