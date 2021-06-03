const User =  require('../DB/Models/User');

const registerUser = () => new User();
const loginUser = async (email) => await User.findOne({email: email});

module.exports = { registerUser, loginUser };