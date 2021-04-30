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

    categoria:{
    type: String,
    required: false
    },
    
    book_cover:{
    type: String,
    required: false
    },
    amount: {
    type:Number,
    default: 0,
    required: false
    }
});
module.exports = mongoose.model('Book', bookSchema);