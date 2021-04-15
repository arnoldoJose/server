const { accountSid,authToken } = require("../Config/config");
const client = require("twilio")(accountSid, authToken);

const sendMessage = async (req, res) => {
   try {
     let { phone } = req.query;
    
     let data = await client.messages.create({
       to: `+505${phone}`,
       from: "+15852095296",
       body: "mi primer mensaje",
     });

     res.json(data.sid);
   } catch (error) {
   res.json(error);
   }
};

module.exports = { sendMessage };
