const Admin = require("../DB/Models/Admin");

const registerUser = () => new Admin();
const loginUser = async (email) => await Admin.findOne({email: email}); 

module.exports = { loginUser, registerUser }