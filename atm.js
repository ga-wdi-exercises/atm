var balanceField = $("#balanceField");
var textField = $("#textField");
var depositButton = $("#depositButton");
var withdrawlButton = $("#withdrawlButton");
var enteredAmount;
var balance = 0


function addMoney(){
  enteredAmount=parseInt(textField.val());
  balance = balance + enteredAmount;
  balanceField.html("$" + balance)
  console.log(balance)
}
depositButton.on("click", addMoney);

//user clicks text field
//user enters a numnerical value into text field
//user presses either deopsit or withdrawlButton
  //this amount is captured
//the number entered is either added to or subtracted from the current amount







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
