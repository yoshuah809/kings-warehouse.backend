const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.use("/products", require("./routes/products.route.js"));
app.use("/warehouses", require("./routes/warehouse.route.js"));

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to DB successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

dbConnect();

//Routes

mongoose.connection.once("open", () => {
  console.log("Connected to warehouseDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
