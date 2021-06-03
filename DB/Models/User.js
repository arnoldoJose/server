  const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:false
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
      type:String,
      required: true
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.decryptPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Users", userSchema);