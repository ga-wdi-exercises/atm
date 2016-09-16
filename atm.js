
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
$(document).ready(function(){
});



// var checkingDeposit = ("#checking.input");
//
// var checkingWithdraw = $("#checking.withdraw");
// var savingsDeposit = $("#savings.input");
// var savingsWithdraw = $("#savings.withdraw");
// var checkingBalance = $("#checking.balance");
// var savingsBalance = $("#savings.balance");
//
var balance = 100;
var input = 0;

// listeners??
$("input.depositC").click(function(){
  console.log("Hello");
  $("div.balance").text("$"+(input + balance));
  });

$("input.depositS").click(function(){
  console.log("Hello");

$("div.balance").text("$"+(input + balance));
});

// listeners??
// $("#checking.withdraw").on("click", "withdraw")
// $("#savings.withdraw").on("click", "withdraw")

// I need to make the dollar amount from .input to go to display in .balance when I hit button .deposit
//
// make sure i can read the input and convert into a number
// parseFloat
