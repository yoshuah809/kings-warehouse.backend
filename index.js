const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to DB successfully");
  } catch (error) {
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
