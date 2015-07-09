var totalCheckingBalance = 0;
var totalSavingBalance = 0;
//deposit button for Checking
$("#depositCheckingButton").on("click", function (){
  $("#checkingDisplay").text("$ " + totalCheckingBalance);
  console.log(totalCheckingBalance);
  var addingBalance = parseInt($("#checkingInput").val());
  totalCheckingBalance +=  addingBalance;
  return $("#checkingDisplay").text("$ " + totalCheckingBalance)})
//Withdraw button for Checking
$("#withdrawCheckingButton").on("click", function (){
  console.log(totalCheckingBalance)
  var withdrawingBalance = parseInt($("#checkingInput").val());
  totalCheckingBalance -=  withdrawingBalance;
return $("#checkingDisplay").text("$ " + totalCheckingBalance) })
//deposit button for Savings
$("#depositSavingsButton").on("click", function (){
  console.log(totalSavingBalance);
  var depositBalance = parseInt($("#savingsInput").val());
  totalSavingBalance +=  depositBalance;
return $("#savingsDisplay").text("$ " + totalSavingBalance)})
//withdraw button for savings
$("#withdrawSavingsButton").on("click", function (){
  console.log(totalSavingBalance)
    var withdrawSavingBalance = parseInt($("#savingsInput").val());
    totalSavingBalance -=  withdrawSavingBalance
  return $("#savingsDisplay").text("$ " + totalSavingBalance)})


/* var checkingBalance = checkingBalance + $("checkingInput").val();
var checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
}
function checkingWithdrawal(amount){
}
function savingsDeposit(amount){
}
function savingsWithdrawal(amount){
}*/

// an eventListerner for each button, each one a "click"
