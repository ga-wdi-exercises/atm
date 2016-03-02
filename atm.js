$(document).ready(function()){
var checkingDepositButton = $("#checking_deposit")
var checkingWithdrawlButton = $("#checking_withdraw")
var checkingUserInput = $("#checking_amount")
var checkingTotal = 0
var checkingDisplay = $("#checking_balance")

var savingDepositButton = $("#savings_deposit")
var savingWithdrawlButton = $("#savings_withdraw")
var savingUserInput = $("#savings_amount")
var savingTotal = 0
var savingDisplay = $("#savings_balance")

checkingDepositButton.on("click", function (){
checkingTotal += parseFloat(checkingUserInput.val());
checkingDisplay.html(checkingTotal)
console.log(checkingUserInput.val());
})

checkingWithdrawlButton.on("click", function(){
  checkingTotal -= parseFloat(checkingUserInput.val());
  checkingDisplay.html(checkingTotal)
  console.log(checkingUserInput.val());
})

savingDepositButton.on("click", function (){
savingTotal += parseFloat(savingUserInput.val());
savingDisplay.html(savingTotal)
console.log(savingUserInput.val());
})

savingWithdrawlButton.on("click", function(){
  savingTotal -= parseFloat(savingUserInput.val());
  savingDisplay.html(savingTotal)
  console.log(savingUserInput.val())
})

if (checkingTotal < 0){
  $("checkingDisplay").css("background", red);
}

});
//
// CashRegister.prototype.calculateTotal = function(){
//   var total = 0;
//   for( var i = 0; i < this.entries.length; i++ ){
//     total += this.entries[i];
//   }
//   return total;
// }
