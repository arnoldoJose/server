const { smsSid,smsToken } = require("../Config/config");
const client = require("twilio")(smsSid,smsToken);

const sendMessage = async (req, res) => {
   let { phone } = req.query;
   
  let data = await client.messages.create({
    to: `+505${phone}`,
    from: "+15852095296",
    body: "mi primer mensaje",
  });

 res.json(data.sid);
};

module.exports = { sendMessage };
