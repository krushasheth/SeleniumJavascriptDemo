const { By } = require("selenium-webdriver");

exports.inventoryElements = (driver) => {
  const sortDropdown = driver.findElement(
    By.xpath("//option[contains(text(),'Name (Z to A)')]")
  );
  const itemNames = driver.findElements(By.className("inventory_item_name"));
  const addToCartButtons = driver.findElements(By.className("btn_inventory"));
  const shoppingCartLink = driver.findElement(
    By.className("shopping_cart_link")
  );
  const itemPrices = driver.findElements(By.className("inventory_item_price"));

  return {
    sortDropdown,
    itemNames,
    addToCartButtons,
    shoppingCartLink,
    itemPrices,
  };
};
