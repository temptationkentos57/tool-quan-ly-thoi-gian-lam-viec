const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, email } = req.body;
  const user = new User({ username, email });
  await user.save();
  res.status(201).send(user);
});

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;