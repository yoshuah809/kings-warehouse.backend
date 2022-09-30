const express = require("express");
const mongoose = require("mongoose");
const {
  findAllProducts,
  createProduct,
  findProductById,
  deleteProductById,
  updateProduct,
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

router.get("/:id", validateObjectId, async (req, res) => {
  try {
    const product = await findProductById(req.params.id);
    res.json(product);
  } catch (err) {
    // Rejected Promise AKA no product found
    console.log(err);
    res.status(err?.status ?? 500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
});

// UPDATE A POKEMON
router.put("/:id", validateObjectId, async (req, res) => {
  try {
    // For PUT requests, the data to update comes through the request body as well
    const product = await updateProduct(req.params.id, req.body);
    res.send({ product });
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
});

router.delete("/:id", validateObjectId, async (req, res) => {
  try {
    await deleteProductById(req.params.id);
    res.send(); // 200 OK is good
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
}); 


module.exports = router;
