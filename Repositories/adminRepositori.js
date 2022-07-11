const Admin = require("../DB/Models/Admin");

const registerUser = () => new Admin();
const loginUser = async (email) => await Admin.findOne({email: email}); 
const registerType =  () => new Admin();
module.exports = { loginUser, registerUser, registerType }