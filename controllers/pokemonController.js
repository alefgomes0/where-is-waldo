const Pokemon = require("../models/pokemon");
const asyncHandler = require("express-async-handler");

exports.post = asyncHandler(async (req, res, next) => {
  const clickedPokemon = await Pokemon.findOne({ name: req.body.name });
  const rightAnswer =
    clickedPokemon.min_width_ratio <= req.body.width &&
    clickedPokemon.max_width_ratio >= req.body.width &&
    clickedPokemon.min_height <= req.body.height &&
    clickedPokemon.max_height >= req.body.height;

  if (rightAnswer) res.json({ message: "right" })
  else res.json({ message: "wrong" })

});
