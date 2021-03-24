

class Socket {
  constructor(io) {
    this.io = io;
    this.socketEvent();
  }

  socketEvent () {
    this.io.on('connection', ( socket ) => {
      socket.on('mensaje del server', (data) => {
        this.io.emit("otro mensaje del server",data);
      })
    })
  }
}

module.exports = Socket;