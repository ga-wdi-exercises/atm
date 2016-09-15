$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var checkAmt = $("#checking").children("input.input");
var checkDeposit = $("#checking").children("input.deposit");
var checkWithdraw = $("#checking").children("input.withdraw");
var saveAmt = $("#savings").children("input.input");
var saveDeposit = $("#savings").children("input.deposit");
var saveWithdraw = $("#savings").children("input.withdraw");

//Checkings Account Flow
checkDeposit.on("click", function(){
  checkAmt.val();
  console.log(checkAmt.val());
});


//Savings Account Flow
// var balance = $("#savings.balance");
//
// function withdraw(amount)


});
