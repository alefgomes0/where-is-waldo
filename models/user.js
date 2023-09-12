const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  time: { type: Number, required: true },
  formattedTime: { type: String, required: true },
  map: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
