const jwt = require('jsonwebtoken');

const auth = (req,res,next) => {

  const headerToken = req.get("Authorization");

  if (!headerToken) {
    const error = new Error("no autorizado");
    error.statusCode = 401;
    throw error;
  }

  let token = headerToken.split(' ')[1];
  let tokenReview;

    try {
    tokenReview = jwt.verify(token,process.env.TOKEN_KEY);
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }

    if (!tokenReview) {
      const error = new Error("token invalido");
      error.statusCode = 401;
      throw error;
    }

    req.usuario = tokenReview.usuario;
  
    next();
}

module.exports = auth;