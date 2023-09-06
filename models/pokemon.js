const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: { type: String },
  min_height: { type: Number },
  max_height: { type: Number },
  min_width_ratio: { type: Number },
  max_width_ratio: { type: Number },
  found: { type: Boolean },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
