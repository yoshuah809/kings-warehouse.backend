const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = {
  code: {
    type: String,
    uppercase: true,
  },
  name: {
    type: String,
    uppercase: true,
  },
  description: String,
  price: Number,
  spaceRequired: Number,
  warehouse: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
};

module.exports = mongoose.model("product", productSchema, "product");
