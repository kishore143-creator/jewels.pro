const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  shopId: String
});
module.exports = mongoose.model("User", userSchema);