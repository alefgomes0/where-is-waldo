const express = require("express")
const router = express.Router()
const pokemonController = require("../controllers/pokemonController")


router.get("/pokemon/:cityName", pokemonController.get)
router.post("/pokemon", pokemonController.post)



module.exports = router
