
class Connection {

  connection (io) {
    io.on("connection", () => {
      console.log("cliente conectado");
      
    });
  }

  emitMessage (io,key,metodo,name_book) {
   io.emit(`${key}`, `Nueva solicitud de ${metodo} al libro: ${name_book}`);
  }
}

let { connection,emitMessage } = new Connection();

module.exports = { connection,emitMessage }