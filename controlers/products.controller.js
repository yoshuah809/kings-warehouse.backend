const Product = require("../models/productModel");

//Find all Pokemons controller
const findAllProducts = async () => await Product.find();


const createProduct = async productToSave => {
  try {
    product = new Product(productToSave);
    await product.save();
    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = { findAllProducts, createProduct };
