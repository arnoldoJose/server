const mongoose = require('mongoose');
require('../../Config/config');
var bookSchema = new mongoose.Schema({
    name:{
    type:String,
    required:true,
    
    },
    autor: {
    type: String,
    required: true
    },

    editorial: {
    type: String,
    required: true
    },

    descripcion:{
        type:String,
        required:false
    },

    fecha: {
    type: String,
    required: false
    },

    categoria:{
    type: String,
    required: false
    },

    genero:{
    type:String,
    required: false
    },
    
    book_cover:{
    type: String,
    required: false
    },
    amount: {
        type:String,
        required: false
    }
});
//pasar la imagen a subir en un metodo del esquema
bookSchema.methods.imageUpload = function (filename) {
    this.book_cover = `${process.env.HOST}:${process.env.PORT}/${filename}`
}

module.exports = mongoose.model('Book', bookSchema);