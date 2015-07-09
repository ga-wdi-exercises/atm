var balanceField = $("#balanceField");
var textField = $("#textField");
var depositButton = $("#depositButton");
var withdrawButton = $("#withdrawButton");
var balance = 0;
var savingsBalanceField = $("#savingsBalanceField");
var savingsTextField = $("#savingsTextField");
var savingsDepositButton = $("#savingsDepositButton");
var savingsWithdrawButton = $("#savingsWithdrawButton");
var savingsBalance = 0;
var enteredAmount;

depositButton.on("click", depositMoney);
function depositMoney(){
  enteredAmount=parseInt(textField.val());
  balance = balance + enteredAmount;
  balanceField.html("$" + balance);
  //console.log(balance);
}
withdrawButton.on("click", withdrawMoney);
function withdrawMoney(){
  enteredAmount=parseInt(textField.val());
  balance = balance - enteredAmount;
  balanceField.html("$" + balance);
  //console.log(balance);
}
savingsWithdrawButton.on("click", savingsWithdrawMoney);
function savingsWithdrawMoney(){
  savingsEnteredAmount=parseInt(savingsTextField.val());
  savingsBalance = savingsBalance - savingsEnteredAmount;
  savingsBalanceField.html("$" + savingsBalance);
  //console.log(savingsBalance);
}
savingsDepositButton.on("click", savingsDepositMoney);
function savingsDepositMoney(){
  savingsEnteredAmount=parseInt(savingsTextField.val());
  savingsBalance = savingsBalance + savingsEnteredAmount;
  savingsBalanceField.html("$" + savingsBalance);
  //console.log(savingsBalance);
}





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
