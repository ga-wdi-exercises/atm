// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

//}
checkDepositTotal = 0;
$(".checkingDeposit").on("click", function checkingDeposit(amount){
  console.log("checking Deposit")

  var inputAmount = parseInt($("input.checkingAmount").val(),10);
    checkDepositTotal = inputAmount + checkDepositTotal;
  $("#checking_balance.balance").html("$" + checkDepositTotal)

})

$(".checkingWithdrawal").on("click", function checkingWithdrawal(amount){
console.log("checking withdrawal")
})

$(".savingsDeposit").on("click", function savingsDeposit(amount){
console.log("savings Deposit")
var inputAmount = $("input.savingsAmount").val();
$("#savings_balance.balance").html("$" + inputAmount)
})

$(".savingsWithdrawal").on("click", function savingsWithdrawal(amount){
console.log("savings withdrawal")
})


// an eventListerner for each button, each one a "click"
