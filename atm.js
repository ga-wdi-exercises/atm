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

// an eventListerner for each button, each one a "click"


//Directions
// As a user, I want to deposit money into one of the bank accounts
// As a user, I want to withdraw money from one of the bank accounts
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.


//

$(document).ready(function() {  ///DON'T DELETE

// var checkingBalance = function(amount) {
//   alert("I worked!")
// }

// var cDepositButton = $("#cDepositButton")
// var checkingInput;

$("#cDepositButton").on("click", function(checkingBalance) {
  alert("button worked!")
})
//omg i got the button to work. FIRST: created an ID in the HTML for the deposit button so that I could identify it.  once that was done i made the event listener (with alert) with an anonymous function.  then i entered checkingBalance in the function. unsure if i need to do this.
// $("#cdepositButton").on("click", function(checkingBalance) {
//   alert("button worked!")
// })










}) ///CLOSING TAG DON'T DELETE
