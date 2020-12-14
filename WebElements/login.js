const { By } = require("selenium-webdriver");

exports.loginElements = (driver) => {
  const userNameInput = driver.findElement(By.id("user-name"));
  const passwordInput = driver.findElement(By.id("password"));
  const loginButton = driver.findElement(By.id("login-button"));

  return {
    userNameInput,
    passwordInput,
    loginButton,
  };
};
