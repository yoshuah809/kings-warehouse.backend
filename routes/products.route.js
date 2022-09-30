const express = require("express");
const mongoose = require("mongoose");
const { findAllProducts } = require("../controlers/products.controller");
const router = express.Router();

//Custom Validation Functions
const validateObjectId = (req, res, next) => {
  !mongoose.Types.ObjectId.isValid(req.params.id)
    ? res.status(204).send()
    : next();
};

router.get("/", async (req, res) => {
  const products = await findAllProducts();
  res.json(products);
});

module.exports = router;
