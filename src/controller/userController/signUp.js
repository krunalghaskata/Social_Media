const User = require("../../model/user/User");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log("hello", req.body);

    const users = await User.findOne({ email });

    if (users) {
      return res.send("user already existing ,  please login");
    } else if (!(name && email && password)) {
      return res.send("please require input ");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      name,
      email,
      password: hashPassword,
      blogs:[],
    });
    
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = signUp;
