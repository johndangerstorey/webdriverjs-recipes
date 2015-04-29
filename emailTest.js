/*
* Carry out a email test
* use https://code.google.com/p/selenium/wiki/WebDriverJs as reference

run node-debug emailTest.js && nodemon emailTest.js and hit play :)
*/

"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var elements = {};

browser.get('http://zurb.com/ink/inliner.php').
  then(function() {

    // find elements
    elements.textBox = browser.findElement(webdriver.By.id("emailSource"));
    elements.button = browser.findElement(webdriver.By.xpath(".//*[@id='skateForm']/button"));

    // manipulate
    elements.textBox.sendKeys('test');
    elements.button.click();

    elements.inlineEmail = elements.textBox.getAttribute('value').then(function(value){
      debugger;
      console.log('value')
    });
    console.log(elements.inlineEmail.text)
    debugger;
    return elements;
  }).
  then(function(elements) {
    console.log(elements.inlineEmail);
    elements.textBox.sendKeys('test');
  }).
  then(function() {
   console.log('Success!');
  }).
  then(function(){
    browser.sleep(5000);
    browser.close();
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

