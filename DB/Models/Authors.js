const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    fecha_nacimiento:{
      type:String,
      required:true
    },
    edad: {
      type:String,
      required:true
    },
    descripcion:{
      type:String,
      required: true
    }
});

//Export the model
module.exports = mongoose.model("User", authorSchema);