const Pokemon = require("../models/pokemon");
const asyncHandler = require("express-async-handler");

exports.get = asyncHandler(async (req, res, next) => {
  const allPokemons = await Pokemon.find({ map: req.params.cityName });
  res.status(200).json([{ allPokemons }]);
});

exports.post = asyncHandler(async (req, res, next) => {
  const clickedPokemon = await Pokemon.findOne({ name: req.body.name });
  const isDesktop = req.body.isDesktop;

  const viridianDesktopAnswer =
    clickedPokemon.d_min_width_ratio <= req.body.width &&
    clickedPokemon.d_max_width_ratio >= req.body.width &&
    clickedPokemon.d_min_height_ratio <= req.body.heightRatio &&
    clickedPokemon.d_max_height_ratio >= req.body.heightRatio;

  const viridianMobileAnswer =
    clickedPokemon.verm_min_width_ratio <= req.body.width &&
    clickedPokemon.verm_max_width_ratio >= req.body.width &&
    clickedPokemon.m_min_height_ratio <= req.body.heightRatio &&
    clickedPokemon.m_max_height_ratio >= req.body.heightRatio;

  const palletDesktopAnswer =
    clickedPokemon.d_min_width_ratio <= req.body.width &&
    clickedPokemon.d_max_width_ratio >= req.body.width &&
    clickedPokemon.min_height <= req.body.height &&
    clickedPokemon.max_height >= req.body.height;

  const palletMobileAnswer =
    clickedPokemon.m_min_width_ratio <= req.body.width &&
    clickedPokemon.m_max_width_ratio >= req.body.width &&
    clickedPokemon.min_height <= req.body.height &&
    clickedPokemon.max_height >= req.body.height;

  const answer = () => {
    if (req.body.map === "viridian") {
      return isDesktop ? viridianDesktopAnswer : viridianMobileAnswer;
    } else {
      return isDesktop ? palletDesktopAnswer : palletMobileAnswer;
    }
  };

  const rightAnswer = answer();

  if (rightAnswer) res.json({ message: "right" });
  else res.json({ message: "wrong" });
});
