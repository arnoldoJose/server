const jwt = require('jsonwebtoken');
const { key } = require('../../Config/config');
const auth = (req,res,next) => {

  const headerToken = req.get("Authorization");


  if (!headerToken) {
    const error = new Error("no autorizado");
    error.statusCode = 401;
    throw error;
  }

  let token = headerToken.split("/")[1];

  let validateToken;

  try {
    validateToken = jwt.verify(token, key);
  } catch (error) {
    error.statusCode = 500;

    throw error;
  }

  if (!validateToken) {
    const error = new Error("token invalido");
    error.statusCode = 401;
    throw error;
  }

  req.usuario = validateToken.usuario;

  next();

}


module.exports = auth;


