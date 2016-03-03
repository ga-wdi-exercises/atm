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

checking.prototype.calculateTotal = function(entry) {

};


//creating a new checking function based on checking constructor function
var myChecking = new checking();
myChecking.els.checkingDeposit.click( function(event) {
  event.preventDefault();
  // get user input
  var userInput = parseInt(myChecking.els.input.val());
  console.log(userInput);
  // add the inputs to the array an entries
  myChecking.entries.push(userInput);
  // displays user input in checking box
  myChecking.els.value.html(userInput);


});


























});
