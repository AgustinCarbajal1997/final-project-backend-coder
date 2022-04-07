const { buildCheckFunction } = require("express-validator");
const check = buildCheckFunction(["body", "query", "params"]);
const { validateResult } = require("../utils/validateResult");

const validateCreateProduct = [
  check("brand", "Bad request. Insert a brand object.")
    .exists()
    .not()
    .isEmpty(),
  check("article", "Bad request. Insert an article category.")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .escape(),
  check("title", "Bad request. Insert a product title.")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .escape(),
  check("price", "Bad request. Insert a price.")
    .exists()
    .not()
    .isEmpty()
    .escape(),
  check("description", "Bad request. Insert an array with product description.")
    .exists()
    .not()
    .isEmpty()
    .isArray(),
  check("specifications", "Bad request. Insert a productId.")
    .exists()
    .not()
    .isEmpty()
    .isArray(),
  (req, res, next) => {
    validateResult(req, res, next, 400);
  },
];

const validatePutProduct = [
  check("productId", "Bad request. Insert a productId.")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .escape(),
  check("brand", "Bad request. Insert a brand object.")
    .exists()
    .not()
    .isEmpty(),
  check("article", "Bad request. Insert an article category.")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .escape(),
  check("title", "Bad request. Insert a product title.")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .escape(),
  check("price", "Bad request. Insert a price.")
    .exists()
    .not()
    .isEmpty()
    .escape(),
  check("description", "Bad request. Insert an array with product description.")
    .exists()
    .not()
    .isEmpty()
    .isArray(),
  check("specifications", "Bad request. Insert a productId.")
    .exists()
    .not()
    .isEmpty()
    .isArray(),
  (req, res, next) => {
    validateResult(req, res, next, 400);
  },
];

module.exports = {
  validateCreateProduct,
  validatePutProduct,
};
