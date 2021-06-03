const { updateBook } = require("../Repositories/bookRepositori");

const quitOneBook = async (loan, id, res) => {
  let data = await updateBook(id);
  if (data.amount) {
    loan.save();
    data.amount -= 1;
    data.save();
    res.json({ messageCorrect: "prestamo procesado",data: loan });
  } else {
    res.json({ messageError: "libro agotado" });
  }
};

const incrementOneBook = async (id) => {
  let data = await updateBook(id);

  data.amount += 1;

  data.save();
};

const quitOneBookReservation = async (id) => {
  
  let data = await updateBook(id);
  data.amount -= 1;
  data.save();

}


module.exports = { quitOneBook, incrementOneBook,quitOneBookReservation};
