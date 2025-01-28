const express = require("express");
const Products = require("../models/productsSchema");

const router = new express.Router();

router.get("/getproducts", async (req, res) => {
  try {
    const productsData = await Products.find();
    // console.log("productsData=> " + productsData);
    res.status(201).json(productsData);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
