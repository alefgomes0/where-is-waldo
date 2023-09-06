const Pokemon = require("../models/pokemon");
const asyncHandler = require("express-async-handler");

exports.post = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const clickedPokemon = await Pokemon.findOne({ name: req.body.name });
  console.log(clickedPokemon);
  const rightAnswer =
    clickedPokemon.min_width_ratio <= req.body.width &&
    clickedPokemon.max_width_ratio >= req.body.width &&
    clickedPokemon.min_height <= req.body.height &&
    clickedPokemon.max_height >= req.body.height;

  if (rightAnswer) console.log("acertou miseraviii");
  else console.log("errrouuu");

  res.json("ok");
});
