
const roles = (req,res,next) => {

  const { typeUser } = req.usuario;

  if(typeUser !== 'admin'){
    return res.status(401).json({msj: 'no eres administrador'});
  }
  next();
};


const deleteBoksAuth = (req,res,next) => {
  // const { typeUser } = req.usuario;

  // if(typeUser !== 'admin'){
  //   return res.status(401).json({msj:'error al eliminar el libro no eres administrador'})
  // }

}

module.exports = { deleteBoksAuth,roles }