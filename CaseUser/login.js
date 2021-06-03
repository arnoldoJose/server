const { loginUser } = require('../Repositories/repositoriUser');
const jwt = require('jsonwebtoken');

const login = async (req,res) => {

  let { email,password } = req.body;

  let user = await loginUser(email);

  
  if (!user || !user.decryptPassword(password)) {
    res.status(401).json({
      message: "el usuario o contraseña no existe",
    });
    return;
  } else {
    let token = jwt.sign({ user }, "keytoken", { expiresIn: "1h" });
    res.status(200).json({token,user});
  }

}

 module.exports = { login }