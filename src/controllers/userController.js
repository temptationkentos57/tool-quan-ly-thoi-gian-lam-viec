// Controller để xử lý logic cho người dùng

const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};