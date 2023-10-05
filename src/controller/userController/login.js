const User = require("../../model/user/User");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await User.findOne({ email });

    if (!users) {
      return res.send(" please signup...");
    }

    const compareHash = await bcrypt.compareSync(password, users.password);
    if (!compareHash) {
      return res.send("incorrect password please enter valid password");
    }
    users.save();
    res.status(200).send("login success!!!");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = login;
