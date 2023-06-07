const router = require("express").Router();
const {
  createProduct,
  findProducts,
} = require("../controller/ProductController");
//find product
router.get("/products", findProducts);
//create product
router.post("/product", createProduct);

module.exports = router;
