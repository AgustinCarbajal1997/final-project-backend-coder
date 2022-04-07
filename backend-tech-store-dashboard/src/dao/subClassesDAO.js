const ContainerDAO = require("./containerDAO");
const ProductModel = require("../models/product");
const UserModel = require("../models/user");

class Product extends ContainerDAO {
  constructor() {
    if (Product.instance) {
      return Product.instance;
    }
    super(ProductModel);
    Product.instance = this;
  }
}

class User extends ContainerDAO {
  constructor() {
    if (User.instance) {
      return User.instance;
    }
    super(UserModel);
    User.instance = this;
  }
}

const productDao = new Product();
const userDao = new User();

module.exports = {
  productDao,
  userDao
};