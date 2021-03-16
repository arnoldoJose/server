const multer = require('multer');
const path = require('path');
const shortid =  require('shortid');

const storage = multer.diskStorage({
  destination: path.join(__dirname,'../storage/image'),
  filename: function (req,file,cb) {
   let extencion = file.mimetype.split("/")[1]
  cb(null,`${shortid.generate()}.${extencion}`)
  }
});

const upload = multer({storage});

module.exports = upload;