$(document).ready(function(){

var checkingInput = $("#checking").find($(".input"));
var checkingDeposit = $("#checking").find($(".deposit"));
var checkingWithdraw = $("#checking").find($(".withdraw"));
var checkingBalance = $("#checking").find($("span"));


var savingsInput = $("#savings").find($(".input"));
var savingsDeposit = $("#savings").find($(".deposit"));
var savingsWithdraw = $("#savings").find($(".withdraw"));
var savingsBalance = $("#savings").find($("span")).html();

checkingDeposit.click(depositChecking);
checkingWithdraw.click(withdrawChecking);

savingsDeposit.click(depositSavings);
savingsWithdraw.click(withdrawSavings);
  // depositing into checking
function depositChecking() {
  // pulls number from page and trims decimals if exist
  var amount = toNumber(checkingInput.val());
  var balance = parseInt(checkingBalance.text());
  if (isNaN(amount)) {
    alert("You must enter a real number");
  } else {
  checkingBalance.text(balance + amount);
  }
}
  // withdraw checking
function withdrawChecking() {
  // pulls number from page and trims decimals if exist
  var amount = toNumber(checkingInput.val());
  var balance = parseInt(checkingBalance.text());
  // checks to make sure
  if (amount > balance) {
    alert("You do not have enough money to withdraw")
  } else {
  checkingBalance.text(balance - amount);

  }
}

function depositSavings() {
  // depositing into savings
  var amount = toNumber(savingsInput.val());
  var balance = parseInt(savingsBalance.text());
  if (isNaN(amount)) {
    alert("You must enter a real number");
  } else {
  savingsBalance.text(balance + amount);
  }

}

function withdrawSavings(){
  // withdraw savings

}

function toNumber(input) {
  return Math.round(input*100)/100;
}

});

// 2 buttons for each side
// both reading from their input
// on click need to run checks on both input amount
// add or subtract from balance amount
//
