const express = require("express");
const { getAllProducts,createProduct, updateProduct } = require("../controller/productController");
const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
// router.route("/product/:id").put(updateProduct);

module.exports=router