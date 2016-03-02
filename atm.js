$(document).ready(function() {

var checkingBalance = $("#checkingBalance");
var checkingInput = $("#checkingInput");
var savingsBalance = $("#savingsBalance");
var savingsInput = $("#savingsInput");
var newCheckingTotal = 0;
var newSavingsTotal = 0;

var checkingDeposit = function(amount){
  amount.preventDefault();
  var checkingInputValue = parseInt(checkingInput.val());
  newCheckingTotal = newCheckingTotal + checkingInputValue;
  checkingBalance.html("$" + (newCheckingTotal));
  checkingInput.val("");
};

function checkingWithdrawal(amount){
  amount.preventDefault();
  var checkingInputValue = parseInt(checkingInput.val());
  newCheckingTotal = newCheckingTotal - checkingInputValue;
  checkingBalance.html("$" + (newCheckingTotal));
  checkingInput.val("");
}

function savingsDeposit(amount){
  amount.preventDefault();
  var savingsInputValue = parseInt(savingsInput.val());
  newSavingsTotal = newSavingsTotal + savingsInputValue;
  savingsBalance.html("$" + (newSavingsTotal));
  savingsInput.val("");
}

function savingsWithdrawal(amount){
  amount.preventDefault();
  var savingsInputValue = parseInt(savingsInput.val());
  newSavingsTotal = newSavingsTotal - savingsInputValue;
  savingsBalance.html("$" + (newSavingsTotal));
  savingsInput.val("");
}

$("#checkingDepositButton").on("click", checkingDeposit);
$("#checkingWithdrawalButton").on("click", checkingWithdrawal);
$("#savingsDepositButton").on("click", savingsDeposit);
$("#savingsWithdrawalButton").on("click", savingsWithdrawal);

});
