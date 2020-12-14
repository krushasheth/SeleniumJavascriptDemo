const loginElements = require("./login");
const inventoryElements = require("./inventory");
const cartElements = require("./cart");
const checkoutElements = require("./checkout");

exports.default = {
  loginElements: loginElements.loginElements,
  inventoryElements: inventoryElements.inventoryElements,
  cartElements: cartElements.cartElements,
  checkoutElements: checkoutElements.checkoutElements,
};
