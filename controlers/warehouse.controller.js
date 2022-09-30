const Warehouse = require("../models/warehouseModel");

const findAllWarehouses = async () => await Warehouse.find();

module.exports = { findAllWarehouses };
