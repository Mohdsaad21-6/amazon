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

router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("id=> " + id);
    const individualdata = await Products.findOne({ id: id });
    // console.log(individualdata);
    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log(error.message);
  }
});
