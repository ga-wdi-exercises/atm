var totalCheckingBalance = 0;
var totalSavingBalance = 0;
//deposit button for Checking
$("#depositCheckingButton").on("click", function (){
  console.log(totalCheckingBalance)
  var addingBalance = parseInt($("#checkingInput").val());
return totalCheckingBalance +=  addingBalance})
//Withdraw button for Checking
$("#withdrawCheckingButton").on("click", function (){
  console.log(totalCheckingBalance)
  var withdrawingBalance = parseInt($("#checkingInput").val());
  return totalCheckingBalance -=  withdrawingBalance})
//deposit button for Savings
$("#depositSavingsButton").on("click", function (){
  console.log(totalSavingBalance);
  var depositBalance = parseInt($("#savingsInput").val());
return totalSavingBalance +=  depositBalance})
//withdraw button for savings
$("#withdrawSavingsButton").on("click", function (){
  console.log(totalSavingBalance)
    var withdrawSavingBalance = parseInt($("#savingsInput").val());
    return totalSavingBalance -=  withdrawSavingBalance})


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
