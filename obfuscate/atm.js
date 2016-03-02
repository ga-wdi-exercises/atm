var checkingDepositButton = $("#checking_deposit")
var checkingWithdrawlButton = $("#checking_withdraw")
var checkingUserInput = $("#checking_amount")
var checkingTotal = 0
var checkingDisplay = $("#checking_balance")

checkingDepositButton.on("click", function (){
checkingTotal += parseFloat(checkingUserInput.val());
display.html(checkingTotal)
console.log(checkingUserInput.val());
})

checkingWithdrawlButton.on("click", function(){
  checkingTotal -= parseFloat(checkingUserInput.val());
  checkingDisplay.html(checkingTotal)
  console.log(checkingUserInput.val());
})

// if checkingUserInput(total = <0)

//
// CashRegister.prototype.calculateTotal = function(){
//   var total = 0;
//   for( var i = 0; i < this.entries.length; i++ ){
//     total += this.entries[i];
//   }
//   return total;
// }
