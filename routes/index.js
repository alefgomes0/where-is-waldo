const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");
const leaderboard = require("../controllers/leaderboard")
const path = require("path")

router.get("/", (req,res, send) => res.send("hello"))

router.get("/pokemon/:cityName", pokemonController.get);
router.post("/pokemon", pokemonController.post);

router.get("/leaderboard/:map", leaderboard.get)
router.post("/leaderboard", leaderboard.post)

router.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../front-end/index.html"))
})

module.exports = router;
