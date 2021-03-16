const { registerUser } = require('../../Repositories/adminRepositori');
const jwt = require('jsonwebtoken');
const { key,expirate } = require('../../Config/config');
const register = (req,res) => {

  let { name,email,password } = req.body;

  const admin = registerUser();
  admin.name = name;
  admin.email = email;
  admin.password = admin.encryptPassword(password);

  let token = jwt.sign({
    usuario: admin
  },key,{expiresIn: expirate})

  res.json({token:token,usuario: admin});

  admin.save();


}




module.exports = { register }