var checkingBalance = $(".balance")[0];
var checkingInt = Number.parseInt(checkingBalance.innerHTML.replace("$", ""));
console.log(checkingInt);
var savingsBalance = $(".balance")[1];
var savingsInt = Number.parseInt(savingsBalance.innerHTML.replace("$", ""));
console.log(savingsInt);

var checkingDeposit = function(amount){
  // Check contents (integer form) of text input field
  // Sum together that number and the number parsed from the current balance
  // Clear the text input field

}

function checkingWithdrawal(amount){
  // if amount > checkingBalance, check if the remaining withdrawal request could be taken from savingsBalance
  //  if remainder can be taken from savingsBalance, empty checkingBalance then take remainder from savingsBalance
  //clear the text input field

}

function savingsDeposit(amount){
// Check contents (integer form) of text input field
// Sum together that number and the number parsed from the current balance
// Clear the text input field
}

function savingsWithdrawal(amount){
//if amount > savingsBalance, clear the entry field and don't change the balance value
//else, withdraw the amount
//clear the text input field
}

// an eventListerner for each button, each one a "click"
