const express = require("express");
const router = expres.Router();

const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
