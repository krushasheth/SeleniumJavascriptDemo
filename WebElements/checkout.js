const {Builder, By, Key, util} = require("selenium-webdriver");
exports.checkoutElements = (driver) => {
    const firstName = driver.findElement(By.id("first-name"));
    const lastName = driver.findElement(By.id("last-name"));
    const postalCode = driver.findElement(By.id("postal-code"));
    const continueButton = driver.findElement(By.className("btn_primary cart_button"));
    const finishButton = driver.findElement(By.xpath("//a[contains(text(),'FINISH')]"));

    return {
        firstName,
        lastName,
        postalCode,
        continueButton,
        finishButton
    }
}