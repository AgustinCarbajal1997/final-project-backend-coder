const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const products = require("../controllers/products.controller");
const {
  validateCreateProduct,
  validatePutProduct,
} = require("../validators/products");
router
  .post(
    "/postProduct",
    auth.authVerification,
    auth.authAdmin,
    products.postProduct
  )
  .post(
    "/postImage",
    validateCreateProduct,
    auth.authVerification,
    auth.authAdmin,
    products.postImage
  )
  .put(
    "/putProduct",
    validatePutProduct,
    auth.authVerification,
    auth.authAdmin,
    products.putProduct
  )
  .delete(
    "/deleteProduct/:id",
    auth.authVerification,
    auth.authAdmin,
    products.deleteProduct
  );

module.exports = router;
