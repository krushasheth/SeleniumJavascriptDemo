const { By } = require("selenium-webdriver");

exports.cartElements = (driver) => {
    const removeButtons = driver.findElements(By.className("cart_button"));
    const continueShoppingButton = driver.findElement(By.xpath("//a[contains(text(),'Continue Shopping')]"));
    const checkoutButton = driver.findElement(By.className("btn_action checkout_button"));

    return {
        removeButtons,
        continueShoppingButton,
        checkoutButton
    }
}