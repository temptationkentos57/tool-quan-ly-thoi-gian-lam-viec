const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  totalHours: { type: Number, default: 0 },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;