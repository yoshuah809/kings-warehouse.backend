const Product = require("../models/productModel");

//Find all Pokemons controller
const findAllProducts = async () => await Product.find();

const findProductById = async id => {
  try {
    const product = await Product.findById(id);

    if (product == null) {
      throw { status: 204, msg: `No Product with the id ${id} was found.` };
      return { status: 204, msg: `No Product with the id ${id} was found.` };
    }
    return product;
  } catch (e) {
    throw e;
  }
};

const createProduct = async productToSave => {
  try {
    product = new Product(productToSave);
    await product.save({ new: true });
    return product;
  } catch (error) {
    throw error;
  }
};

const deleteProductById = async id => await Product.findByIdAndDelete(id);

module.exports = {
  findAllProducts,
  createProduct,
  findProductById,
  deleteProductById,
};
