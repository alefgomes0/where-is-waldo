const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");

exports.post = [
  body("name").escape().trim(),
  body("map").escape().trim(),
  asyncHandler(async (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      time: req.body.time,
      formattedTime: req.body.formattedTime,
      map: req.body.map,
    });
    console.log(req.body);
    await newUser.save();
    res.json("saved");
  }),
];
