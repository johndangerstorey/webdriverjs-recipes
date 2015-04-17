/*
* Carry out a email test
* use https://code.google.com/p/selenium/wiki/WebDriverJs as reference
*/

"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

browser.get('http://zurb.com/ink/inliner.php').
  then(function() {
    return driver.findElement(webdriver.By.name("q"));
  }).
  then(function(q) {
    return q.sendKeys("webdriver");
  }).
  then(function() {
    return driver.findElement(webdriver.By.name("btnG"));
   }).
  then(function(btnG) {
    return btnG.click();
   }).
  then(function() {
    return driver.getTitle();
  });

// // go to page
// browser.get('http://zurb.com/ink/inliner.php');

// // find elements
// var textBox = browser.findElement(webdriver.By.id("emailSource"));
// var button = browser.findElement(webdriver.By.xpath(".//*[@id='skateForm']/button"));

// // manipulate
// textBox.sendKeys('test');
// button.click();

// var inlineEmail = textBox.textCode


//var textRecipients = browser.findElement(webdriver.By.id("recipient-value"));
//var textSubject = browser.findElement(webdriver.By.id("mail_test_subject"));
//var textCode = browser.findElement(webdriver.By.id("CodeMirror-code"));

