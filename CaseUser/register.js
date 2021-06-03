const { registerUser } = require('../Repositories/repositoriUser');


const register = (req,res) => {

  let { username,email,password,mobile } = req.body;

  let newUser = registerUser();
  newUser.username = username;
  newUser.email = email;
  newUser.mobile = mobile;
  newUser.password = newUser.encryptPassword(password)

  newUser.save();

}

module.exports = { register }