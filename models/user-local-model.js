const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userLocalSchema = new Schema({
  username: String,
  password: String,
  email: String
});

const UserLocal = mongoose.model("userLocal", userLocalSchema);

module.exports = UserLocal;
