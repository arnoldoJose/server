const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
// Declare the Schema of the Mongo model
var adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    
    password:{
        type:String,
        required:true,
    },
});

adminSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
}

adminSchema.methods.decryptPassword = function (password) {
  return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('Admin', adminSchema);