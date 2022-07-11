const { registerUser } = require('../../Repositories/adminRepositori');

const register = (req,res) => { 
  let { name,email,password } = req.body;

  const admin = registerUser();
  admin.name = name;
  admin.email = email;
  admin.password = admin.encryptPassword(password);

  // admin.save();

  res.json({msj:`el usuario ${name} a sido registrado`});
}

module.exports = { register }