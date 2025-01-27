const mongoose = require("mongoose");
require("mongodb");
// const { mongoClient } = require("mongodb");

const DB = process.env.DATABASE;

// const client = new mongoClient(DB);

// const dbName = "Amazonweb";

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
