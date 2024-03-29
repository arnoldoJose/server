const { accountSid,authToken } = require("../Config/config");
const client = require("twilio")(accountSid, authToken);

const sendMessage = async (req, res) => {
   try {
     let { phone,dev,name } = req.query;

    let data;
   if(!dev){
       data = await client.messages.create({
        to: `+505${phone}`,
        from: "+12565379375",
        body: `Hola ${name} el libro que reservaste esta disponible`,
      });
   }else{
       data = await client.messages.create({
         to: `+505${phone}`,
         from: "+12565379375",
         body: `Hola ${name} hoy se cumple el plazo para devolver el libro`,
       });
   }
   console.log(data.sid)

     res.json(data.sid);
   } catch (error) {
   res.json(error);
   }
};

module.exports = { sendMessage };
