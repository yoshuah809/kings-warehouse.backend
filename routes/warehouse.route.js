const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const { findAllWarehouses } = require("../controlers/warehouse.controller");

router.get("/", async (req, res) => {
  const warehouses = await findAllWarehouses();
  res.json(warehouses);
});

module.exports = router;
