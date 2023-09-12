const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");
const leaderboard = require("../controllers/leaderboard")

router.get("/pokemon/:cityName", pokemonController.get);
router.post("/pokemon", pokemonController.post);

router.post("/leaderboard", leaderboard.post)

module.exports = router;
