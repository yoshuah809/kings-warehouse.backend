const Product = require("../models/productModel");

//Find all Pokemons controller
const findAllProducts = async () => await Product.find();

module.exports = { findAllProducts };
