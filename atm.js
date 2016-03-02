$(document).ready(function() {

var checkingBalance = $("#checkingBalance");

var checkingDeposit = function(amount){
  var checkingInput = parseInt($("#checkingInput").val());
  var newTotal = checkingBalance + checkingInput;
  console.log(checkingBalance);
  checkingBalance.html("$" + checkingInput);

};

function checkingWithdrawal(amount){

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
