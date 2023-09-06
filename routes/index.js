const express = require("express")
const router = express.Router()
const pokemonController = require("../controllers/pokemonController")


router.post("/pokemon", pokemonController.post)


module.exports = router
