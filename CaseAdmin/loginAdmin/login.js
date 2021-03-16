const { loginUser } = require('../../Repositories/adminRepositori');
const jwt = require('jsonwebtoken');
const { key,expirate } = require('../../Config/config');

const login = async (req,res) => {

  let {email,password} = req.body;

  const admin = await loginUser(email);

  if(!admin){
  
    res.status(400).json({message: "el email no existe"});
    return;
  
  }

  if(!admin.decryptPassword(password)){
  
    res.status(400).json({message: "el password no existe"});
    return;
  
  }else{

    let token = jwt.sign({
        usuario: admin
      },key,{ expiresIn: expirate });

    res.status(200).json({token});
  }

}

module.exports = { login }