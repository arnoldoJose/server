const { registerType } = require("../../Repositories/adminRepositori");

const registerTypeAdmin = (req, res) => {
  let { name, email, password, typeUser } = req.body;
  let adminType = registerType();

  if (typeUser){
    adminType.typeUser = typeUser;
  }
  adminType.name = name;
  adminType.email = email;
  adminType.password = adminType.encryptPassword(password);
  //adminType.save();
  
  res.json({msj:`el usuario ${name} a sido registrado`});
};

module.exports = { registerTypeAdmin };