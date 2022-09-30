const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouseSchema = {
  name: {
    type: String,
    uppercase: true,
  },
  address: String,
  phoneNumber: Number,
  capacity: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
    required: true,
  },
};

module.exports = mongoose.model("warehouse", warehouseSchema, "warehouse");
