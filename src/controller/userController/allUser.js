const User = require('../../model/user/User');

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).send("user  not found...!! ");
    } else {
      return res.status(201).send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getAllUser;
