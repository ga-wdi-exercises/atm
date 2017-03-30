
$(document).ready(function(){

var checkingDeposit = $("#checkingDeposit");
var checkingWithdraw = $("#checkingWithdraw");
var checkingBalance = $("#checking .balance");
var savingsDeposit = $("#savingsDeposit");
var savingsWithdraw = $("#savingsWithdraw");
var savingsBalance = $("#savings .balance");
var savedBalance = 0;

checkingDeposit.on("click", function(){
  console.log ("checking deposit working");
  var userInput = parseInt($("#checkingInput").val())
  savedBalance += userInput
  checkingBalance.html('$' + savedBalance)
});
checkingWithdraw.on("click", function(){
  console.log ("checking withdrawal working");
  var userInput = parseInt($("#checkingInput").val())
  savedBalance -= userInput
  checkingBalance.html('$' + savedBalance)
});
savingsDeposit.on("click", function(){
  console.log ("savings deposit working");
  var userInput = parseInt($("#savingsInput").val())
  savedBalance += userInput
  savingsBalance.html('$' + savedBalance)
});
savingsWithdraw.on("click", function(){
  console.log ("savings withdrawal working");
  var userInput = parseInt($("#savingsInput").val())
  savedBalance -= userInput
  savingsBalance.html('$' + savedBalance)
  })
});
