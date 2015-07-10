var totalCheckingBalance = 0;
var totalSavingBalance = 0;
var totalAccountBalance = 0;

//deposit button for Checking
$("#depositCheckingButton").on("click", function (){
  $("#checkingDisplay").text("$ " + totalCheckingBalance);
  console.log(totalCheckingBalance);
  var addingBalance = parseInt($("#checkingInput").val());
  totalCheckingBalance +=  addingBalance;
  totalAccountBalance += totalCheckingBalance;
  return $("#checkingDisplay").text("$ " + totalCheckingBalance)})

//Withdraw button for Checking
$("#withdrawCheckingButton").on("click", function (){
  console.log(totalCheckingBalance)
var withdrawingBalance = parseInt($("#checkingInput").val());
if (totalAccountBalance > withdrawingBalance && totalCheckingBalance < withdrawingBalance)
{
  var transferBalance = withdrawingBalance - totalCheckingBalance;
  totalCheckingBalance = 0
  totalAccountBalance -= transferBalance;
  totalSavingBalance -= transferBalance;
  $("#savingsDisplay").text("$ " + totalSavingBalance);
  $("#checkingDisplay").text("$ " + totalCheckingBalance);
}
  else if (totalCheckingBalance >= withdrawingBalance){
  totalCheckingBalance -=  withdrawingBalance;
  totalAccountBalance -= totalCheckingBalance;}
  else alert("Withdrawing too much money!");
return $("#checkingDisplay").text("$ " + totalCheckingBalance) })

//deposit button for Savings
$("#depositSavingsButton").on("click", function (){
  console.log(totalSavingBalance);
  var depositBalance = parseInt($("#savingsInput").val());
  totalSavingBalance +=  depositBalance;
  totalAccountBalance =+ totalSavingBalance;
return $("#savingsDisplay").text("$ " + totalSavingBalance)})

//withdraw button for savings
$("#withdrawSavingsButton").on("click", function (){
  console.log(totalSavingBalance)
    var withdrawSavingBalance = parseInt($("#savingsInput").val());
    if (totalAccountBalance > withdrawSavingBalance && totalSavingBalance < withdrawSavingBalance)
    {
      var transferBalance = withdrawSavingBalance - totalSavingBalance;
      totalSavingBalance = 0
      totalAccountBalance -= transferBalance;
      totalCheckingBalance -= transferBalance;
      $("#savingsDisplay").text("$ " + totalSavingBalance);
      $("#checkingDisplay").text("$ " + totalCheckingBalance);
    }
    else if (totalSavingBalance >= withdrawSavingBalance){
    totalSavingBalance -=  withdrawSavingBalance;
    totalAccountBalance -= totalSavingBalance}
    else alert("Withdrawing too much money!!")
  return $("#savingsDisplay").text("$ " + totalSavingBalance)})
