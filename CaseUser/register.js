const { registerUser } = require('../Repositories/repositoriUser');
const jwt = require('jsonwebtoken');

const register = (req,res) => {

  let { name,email,password,phone } = req.body;

  let newUser = registerUser();
  newUser.username = name;
  newUser.email = email;
  newUser.mobile = phone;
  newUser.password = newUser.encryptPassword(password)

  console.log(phone,name,email,password)
  newUser.save();


  let token = jwt.sign({newUser},"keytoken",{expiresIn: "1h"})

  res.status(200).json({token,newUser})

}


const pruebaFunction = (req,res,message,io) => {
res.json('enviado');
message(io)
}

module.exports = { register,pruebaFunction }