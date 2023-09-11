const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: { type: String },
  min_height: { type: Number },
  max_height: { type: Number },
  d_min_height_ratio: { type: Number },
  d_max_height_ratio: { type: Number },
  m_min_height_ratio: { type: Number },
  m_max_height_ratio: { type: Number },
  d_min_width_ratio: { type: Number },
  d_max_width_ratio: { type: Number },
  m_min_width_ratio: { type: Number },
  m_max_width_ratio: { type: Number },
  verm_min_width_ratio: { type: Number },
  verm_max_width_ratio: { type: Number },
  found: { type: Boolean },
  map: { type: String },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
