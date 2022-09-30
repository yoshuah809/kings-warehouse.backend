const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//Custom Validation Functions
const validateObjectId = (req, res, next) => {
  !mongoose.Types.ObjectId.isValid(req.params.id)
    ? res.status(204).send()
    : next();
};

router.get("/", async (req, res) => {
  // const pokemon = await findAllPokemons();
  // res.json(pokemon);

  res.json("Welcome to this page");
});

module.exports = router;
