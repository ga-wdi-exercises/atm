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
  // displays user input in checking box
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
































});
