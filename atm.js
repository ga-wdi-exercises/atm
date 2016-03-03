// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }
//
// // an eventListerner for each button, each one a "click"

$(document).ready(function() {

function checking() {
  $("#checkingAcct").addClass("zero");
  this.entries = [];
  this.els = {
    // checking value
    value: $("#checkingAcct"),
    // input for deposit amount
    input: $("#checkingAmt"),
    // checking deposit button
    checkingDeposit: $("#checkingDeposit"),
    // checking withdraw button
    checkingWithdrawal: $("#checkingWithdrawal"),
  };
}

checking.prototype.calculateBal = function(entry) {
  var total = 0;
  for (var i = 0; i < this.entries.length; i++){
    total += this.entries[i];
  }
  return total;
};


//creating a new checking function based on checking constructor function
var myChecking = new checking();

// what happens when checking deposit button is clicked
myChecking.els.checkingDeposit.click( function(event) {
  event.preventDefault();
  // get user input
  var userInput = parseInt(myChecking.els.input.val());
  console.log(userInput);
  // add the inputs to the array an entries
  myChecking.entries.push(userInput);
  // displays user input in checking box and removes css .zero class
  $("#checkingAcct").removeClass("zero");
  myChecking.els.value.html(userInput);
  // calculate balance
  var newBal = myChecking.calculateBal();
  // displays new balance
  myChecking.els.value.html("$" + newBal);
});

// what happens when checking withdrawal button is clicked
myChecking.els.checkingWithdrawal.click( function(event) {
  event.preventDefault();
  // get user input
  var userInput = parseInt(myChecking.els.input.val());
  console.log(userInput);
  // turn user iput to a negative value
  if (userInput > 0) {
    userInput = userInput * -1;
  }
  // add the inputs to the array of entries
  myChecking.entries.push(userInput);
  // displays user input in checking box
  myChecking.els.value.html(userInput);
  // calculate balance
  var newBal = myChecking.calculateBal();
  // displays new balance
  myChecking.els.value.html("$" + newBal);
});

function savings() {
  $("#savingsAcct").addClass("zero");
  this.entries = [];
  this.els = {
    // savings value
    value: $("#savingsAcct"),
    // input for deposit amount
    input: $("#savingsAmt"),
    // savings deposit button
    savingsDeposit: $("#savingsDeposit"),
    // savings withdraw button
    savingsWithdrawal: $("#savingsWithdrawal"),
  };
}

savings.prototype.calculateBal = function(entry) {
  var total = 0;
  for (var i = 0; i < this.entries.length; i++){
    total += this.entries[i];
  }
  return total;
};


//creating a new savings function based on savings constructor function
var mySavings = new savings();

// what happens when savings deposit button is clicked
mySavings.els.savingsDeposit.click( function(event) {
  event.preventDefault();
  // get user input
  var userInput = parseInt(mySavings.els.input.val());
  console.log(userInput);
  // add the inputs to the array an entries
  mySavings.entries.push(userInput);
  // displays user input in savings box and removes css .zero class
  $("#savingsAcct").removeClass("zero");
  mySavings.els.value.html(userInput);
  // calculate balance
  var newBal = mySavings.calculateBal();
  // displays new balance
  mySavings.els.value.html("$" + newBal);
});

// what happens when savings withdrawal button is clicked
mySavings.els.savingsWithdrawal.click( function(event) {
  event.preventDefault();
  // get user input
  var userInput = parseInt(mySavings.els.input.val());
  console.log(userInput);
  // turn user iput to a negative value
  if (userInput > 0) {
    userInput = userInput * -1;
  }
  // add the inputs to the array of entries
  mySavings.entries.push(userInput);
  // displays user input in savings box
  mySavings.els.value.html(userInput);
  // calculate balance
  var newBal = mySavings.calculateBal();
  // displays new balance
  mySavings.els.value.html("$" + newBal);
});

































});
