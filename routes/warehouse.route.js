const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {
  findAllWarehouses,
  findWarehouseById,
  createWarehouse,
  deleteWarehouseById,
  updateWarehouse,
} = require("../controlers/warehouse.controller");

//Custom Validation Functions
const validateObjectId = (req, res, next) => {
  !mongoose.Types.ObjectId.isValid(req.params.id)
    ? res.status(204).send()
    : next();
};

router.get("/", async (req, res) => {
  const warehouses = await findAllWarehouses();
  res.json(warehouses);
});

router.get("/:id", validateObjectId, async (req, res) => {
  try {
    const warehouse = await findWarehouseById(req.params.id);
    res.json(warehouse);
  } catch (err) {
    // Rejected Promise if no warehouse found
    console.log(err);
    res.status(err?.status ?? 500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const warehouse = createWarehouse(req.body);
    res.status(201).json(warehouse);
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
});

// UPDATE A WAREHOUSE
router.put("/:id", validateObjectId, async (req, res) => {
  try {
    // For PUT requests, the data to update comes through the request body as well
    const warehouse = await updateWarehouse(req.params.id, req.body);
    res.send({ warehouse });
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
});

router.delete("/:id", validateObjectId, async (req, res) => {
  try {
    await deleteWarehouseById(req.params.id);
    res.send(); // 200 OK is good
  } catch (err) {
    res.status(err?.status ?? 500).json(err);
  }
});
  
module.exports = router;
