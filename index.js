const { Builder, By, Key, util, Thread} = require("selenium-webdriver");
var assert = require('assert');
const {loginElements, inventoryElements, cartElements, checkoutElements} = require("./WebElements/index").default;

async function sauceDemo() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    driver.manage().window().maximize();

    // Login User
    await loginElements(driver).userNameInput.sendKeys('standard_user');
    await loginElements(driver).passwordInput.sendKeys('secret_sauce');
    await loginElements(driver).loginButton.click();
    
    // Sort items  
    await inventoryElements(driver).sortDropdown.click();
    
    // Get selected item names
    let items = await inventoryElements(driver).itemNames;
    let itemOne = await items[0].getText();
    let itemTwo = await items[1].getText();
    let itemThree = await items[2].getText();
    

    // Get add to cart buttons and add items to cart
    let addToCartButtons = await inventoryElements(driver).addToCartButtons;
    await addToCartButtons[0].click();
    await addToCartButtons[1].click();
    await addToCartButtons[2].click();

    // Go to cart page
    await inventoryElements(driver).shoppingCartLink.click();

    // Get cart item names and compare with selected item names
    let cartItems = await inventoryElements(driver).itemNames;
    let cartItemOne = await cartItems[0].getText();
    let cartItemTwo = await cartItems[1].getText();
    let cartItemThree = await cartItems[2].getText();
    assert.strictEqual(itemOne,cartItemOne ,"Cart item 1 does not match with selected item 1");
    assert.strictEqual(itemTwo,cartItemTwo,"Cart item 2 does not match with selected item 2");
    assert.strictEqual(itemThree, cartItemThree,"Cart item 3 does not match with selected item 3");
    
    // Remove all items from cart
    const removeButtons = await cartElements(driver).removeButtons;
    await removeButtons[0].click();
    await removeButtons[1].click();
    await removeButtons[2].click();

    // Click on Continue shopping
    await cartElements(driver).continueShoppingButton.click();
   
    // Add new item into cart
    items = await inventoryElements(driver).itemNames;
    itemOne = await items[0].getText();
    const itemPrices = await inventoryElements(driver).itemPrices; 
    const itemOnePrice = await itemPrices[0].getText();
    addToCartButtons = await inventoryElements(driver).addToCartButtons;
    await addToCartButtons[0].click();
    
    // Go to cart page
    await inventoryElements(driver).shoppingCartLink.click();
    
    // Get cart item names and price and compare with added items
    cartItems = await inventoryElements(driver).itemNames;
    cartItemOne = await cartItems[0].getText();

    const cartPrices = await inventoryElements(driver).itemPrices;
    const cartItemOnePrice = await cartPrices[0].getText();
    assert.strictEqual(itemOne, cartItemOne, "Added item1 does not match with cart item1");
    assert.strictEqual(`$${cartItemOnePrice}`, itemOnePrice, "Added item1 price does not match with cart item1 price");
    
    // Click the checkout button
    await cartElements(driver).checkoutButton.click();
    
    // Enter checkout details and complete checkout
    await checkoutElements(driver).firstName.sendKeys("Krusha");
    await checkoutElements(driver).lastName.sendKeys("Shah");
    await checkoutElements(driver).postalCode.sendKeys("11375");
    await checkoutElements(driver).continueButton.click();
    await checkoutElements(driver).finishButton.click(); 
    
    //Close browser
    driver.close();
}

sauceDemo();