const Pokemon = require("../models/pokemon")
const asyncHandler = require("express-async-handler")

exports.get = asyncHandler(async (req, res, next) => {
  const newPokemon = new Pokemon({
    name: "Jolteon",
    min_height: 276,
    max_height: 321,
    min_width_ratio: 1.92,
    max_width_ratio: 2.75,
    found: false
  })

  await newPokemon.save()
  res.json("saved")
})