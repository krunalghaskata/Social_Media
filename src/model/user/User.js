const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    default: null,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength:6,
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "blog", required: true }],
});

module.exports = User = mongoose.model("User", UserSchema);
