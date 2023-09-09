const Pokemon = require("../models/pokemon");
const asyncHandler = require("express-async-handler");

exports.get = asyncHandler(async (req, res, next) => {
  const allPokemons = await Pokemon.find();
  res.status(200).json([{ allPokemons }]);
});

exports.post = asyncHandler(async (req, res, next) => {
  const clickedPokemon = await Pokemon.findOne({ name: req.body.name });
  const isDesktop = req.body.isDesktop;

  const desktopAnswer =
    clickedPokemon.d_min_width_ratio <= req.body.width &&
    clickedPokemon.d_max_width_ratio >= req.body.width &&
    clickedPokemon.min_height <= req.body.height &&
    clickedPokemon.max_height >= req.body.height;

  const mobileAnswer =
    clickedPokemon.m_min_width_ratio <= req.body.width &&
    clickedPokemon.m_max_width_ratio >= req.body.width &&
    clickedPokemon.min_height <= req.body.height &&
    clickedPokemon.max_height >= req.body.height;

  

  const rightAnswer = isDesktop ? desktopAnswer : mobileAnswer
  console.log(clickedPokemon.d_min_width_ratio, clickedPokemon.d_max_width_ratio);
  console.log(req.body.width)

  if (rightAnswer) res.json({ message: "right" });
  else res.json({ message: "wrong" });
});
