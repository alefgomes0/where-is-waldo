const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const Leaderboard = require("../models/user");

exports.get = asyncHandler(async (req, res, next) => {
  const leaderboard = await User.find({ map: req.params.map });
  res.json(leaderboard);
});

exports.post = [
  body("name").escape().trim(),
  body("map").escape().trim(),
  asyncHandler(async (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      time: req.body.time,
      formattedTime: req.body.formattedTime,
      map: req.body.map,
      date: new Date(),
    });
    await newUser.save();
    res.json("saved");
  }),
];
