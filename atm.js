$(document).ready(function() {

var checkingBalance = $("#checkingBalance");
var checkingInput = $("#checkingInput");
var newTotal = 0;

var checkingDeposit = function(amount){
  amount.preventDefault();
  var checkgingInputValue = parseInt(checkingInput.val());
  newTotal = newTotal + checkgingInputValue;
  checkingBalance.html("$" + (newTotal));
  checkingInput.val("");
};

function checkingWithdrawal(amount){
  amount.preventDefault();
  var checkingInputValue = parseInt(checkingInput.val());
  newTotal = newTotal - checkingInputValue;
  checkingBalance.html("$" + (newTotal));
  checkingInput.val("");
}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

$("#checkingDepositButton").on("click", checkingDeposit);
$("#checkingWithdrawalButton").on("click", checkingWithdrawal);
$("#savingsDepositButton").on("click", savingsDeposit);
$("#savingsWithdrawalButton").on("click", savingsWithdrawal);

});
