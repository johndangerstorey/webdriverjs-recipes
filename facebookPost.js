var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('http://www.facebook.com');
driver.findElement(webdriver.By.id('email')).sendKeys('johndstorey1@gmail.com');
driver.findElement(webdriver.By.id('pass')).sendKeys('gershwin1');
driver.findElement(webdriver.By.id('u_0_n')).click();
driver.wait(10);


driver.quit();