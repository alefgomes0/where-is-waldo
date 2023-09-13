const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("luxon");

const UserSchema = new Schema({
  name: { type: String, required: true },
  time: { type: Number, required: true },
  formattedTime: { type: String, required: true },
  map: { type: String, required: true },
  date: { type: Date },
});

UserSchema.virtual("date_formatted").get(function () {
  return `${this.date.toLocaleDateString(DateTime.DATE_SHORT)}`;
});

module.exports = mongoose.model("User", UserSchema);
