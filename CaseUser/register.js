const { registerUser } = require('../Repositories/repositoriUser');
const jwt = require('jsonwebtoken');

const register = (req,res) => {

  let { username,email,password,mobile } = req.body;

  let newUser = registerUser();
  newUser.username = username;
  newUser.email = email;
  newUser.mobile = mobile;
  newUser.password = newUser.encryptPassword(password)

  newUser.save();


  let token = jwt.sign({newUser},"keytoken",{expiresIn: "1h"})

  res.status(200).json({token,newUser})

}

module.exports = { register }