const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {

    const headerToken = req.get("Authorization");

    if(!headerToken){
        const error = new Error("no autorizado");
        error.statusCode = 401;
        throw error;
    }

    let token = headerToken.split('/')[1];
    let reviewToken;

    try {
        reviewToken = jwt.verify(token,'secret')
    } catch (error) {
        error.statusCode =500;
        throw error;
    }

    if(!reviewToken){
        const error = new Error("no autorizado");
        error.statusCode = 401;
        throw error;
    }
    req.usuario = reviewToken.usuario;
    next();
}