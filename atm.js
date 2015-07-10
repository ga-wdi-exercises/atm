checkDepositTotal = 0;
$(".checkingDeposit").on("click", function checkingDeposit(amount){
  console.log("checking Deposit")
  var inputAmount = parseInt($("input.checkingAmount").val(),10);
  checkDepositTotal += inputAmount;
  $("#checking_balance.balance").html("$" + checkDepositTotal)
});

$(".checkingWithdrawal").on("click", function checkingWithdrawal(amount){
console.log("checking withdrawal")
var inputAmount = parseInt($("input.checkingAmount").val(),10);
checkDepositTotal -= inputAmount;
$("#checking_balance.balance").html("$" + checkDepositTotal)
});

savingsDepositTotal = 0;
$(".savingsDeposit").on("click", function savingsDeposit(amount){
console.log("savings Deposit")
var inputAmount = parseInt($("input.savingsAmount").val(),10);
savingsDepositTotal += inputAmount;
$("#savings_balance.balance").html("$" + savingsDepositTotal)
});

$(".savingsWithdrawal").on("click", function savingsWithdrawal(amount){
console.log("savings withdrawal")
var inputAmount = parseInt($("input.savingsAmount").val(),10);
savingsDepositTotal -= inputAmount;
$("#savings_balance.balance").html("$" + savingsDepositTotal)
});
