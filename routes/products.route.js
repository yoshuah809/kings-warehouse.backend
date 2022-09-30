const express = require("express");
const mongoose = require("mongoose");
const {
  findAllProducts,
  createProduct,
} = require("../controlers/products.controller");
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

router.post("/", async (req, res) => {
  try {
    const product = createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
});


module.exports = router;
