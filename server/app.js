require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn");
const PORT = 8005;

const Products=require("./models/productsSchema");
const DefaultData=require("./defaultdata")


app.use("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(PORT, () => {
  console.log(`Server was listeninin on  ${PORT}`);
});


DefaultData();