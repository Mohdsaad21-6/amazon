const Products = require("./models/productsSchema");
const Productsdata = require("./constant/productsdata");
// const products = require("./constant/productsdata");

const DefaultData = async () => {
  try {
    await Products.deleteMany({});

    const storeData = await Products.insertMany(Productsdata);
    console.log(storeData);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DefaultData;
