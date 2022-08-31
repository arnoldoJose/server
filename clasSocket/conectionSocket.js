
class Connection {

  connection (io) {
    io.on("connection", () => {
      console.log("cliente conectado");
      
    });
  }

  emitMessage (io,key,metodo,name_book) {
   io.emit(`${key}`, `Nueva solicitud de ${metodo} al libro: ${name_book}`);
  }
//key,mesage,data
  messageReturn(io,nameUser,nameBook){
    io.emit('devolucion',`${nameUser} ah devuelto el libro ${nameBook}`)
  }
}

let { connection,emitMessage,messageReturn } = new Connection();

module.exports = { connection,emitMessage,messageReturn }