const Warehouse = require("../models/warehouseModel");

const findAllWarehouses = async () => await Warehouse.find();

const findWarehouseById = async id => {
  try {
    const warehouse = await Warehouse.findById(id);

    if (warehouse == null) {
      throw { status: 204, msg: `No warehouse with the id ${id} was found.` };
      return { status: 204, msg: `No warehouse with the id ${id} was found.` };
    }
    return warehouse;
  } catch (e) {
    throw e;
  }
};

const createWarehouse = async warehouseToSave => {
  try {
    const warehouse = new Warehouse(warehouseToSave);
    await warehouse.save({ new: true });
    return warehouse;
  } catch (error) {
    throw error;
  }
};

const deleteWarehouseById = async id => await Warehouse.findByIdAndDelete(id);

module.exports = {
  findAllWarehouses,
  findWarehouseById,
  createWarehouse,
  deleteWarehouseById,
};
