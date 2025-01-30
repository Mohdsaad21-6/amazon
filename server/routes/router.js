const express = require("express");
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");

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

router.post("/register", async (req, res) => {
  // console.log(req.body);

  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the required fields" });
    console.log("Please fill the required fields");
  }
  try {
    const preUser = await USER.findOne({ email: email });

    if (preUser) {
      res.status(422).json({ error: "This Email already exists" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "Passwords are not matching" });
    } else {
      const finalUser = new USER({
        fname: fname,
        email: email,
        mobile: mobile,
        password: password,
        cpassword: cpassword,
      });
      const storedata = await finalUser.save();
      console.log(storedata);

      res.status(201).json({
        message: "User Registered Successfully",
        storedata,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});
