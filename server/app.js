require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn")
// const Products=require("./models/productsSchema")

const DefaultData=require("./defaultdata")
const PORT = 8005;

app.listen(PORT, () => {
  console.log(`Server was listeninin on  ${PORT}`);
});

DefaultData()