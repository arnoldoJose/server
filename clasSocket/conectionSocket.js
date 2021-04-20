
class Connection {

  connection (io) {
    io.on("connection", () => {
      console.log("cliente conectado");
      
    });
  }

  emitMessage (io,name_book) {
   io.emit("envio", `Nueva solicitud de prestamo al libro: ${name_book}`);
  }
}

let { connection,emitMessage } = new Connection();

module.exports = { connection,emitMessage }