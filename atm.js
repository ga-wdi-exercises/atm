// Variables

var checkingAdd = $("#checking input.deposit");
var checkingSub = $("#checking input.withdraw");
var savingAdd = $("#savings input.deposit");
var savingSub = $("#savings input.withdraw");

var checkingBalance = $("#checking .balance");
var savingsBalance = $("#savings .balance");

var checking = 0;
var savings = 0;

// Function Time

function handleChecking() {
  var checkingInput = parseInt($("#checking input.input").val());
  checking = checking + checkingInput;
  checkingBalance.text("$" + checking);
}

function handleCheckingWithdraw() {
  checkingInput = parseInt($("#checking input.input").val());
  //  checkingInput = parseInt($("#checking").children("input.input").val());
   newBalance = checkingInput;
   checking = (checking - newBalance); // make sure this only happens when enough $$
    if (checking < 0) {
      alert("Sorry. You don't have enough money.");
    } else {
      checkingBalance.text("$" + checking);
  }
}

function handleSavings() {
  savingsInput = parseInt($("#savings input.input").val());
  newBalance = savingsInput;
  savings = savings + newBalance;
  savingsBalance.text("$" + savings);
}

function handleSavingsWithdraw() {
   savingsInput = parseInt($("#savings input.input").val());
   newBalance = savingsInput;
   savings = (savings - newBalance); // make sure this only happens when enough $$
    if (savings < 0) {
      alert("Sorry. You don't have enough money.");
    } else {
      savingsBalance.text("$" + savings);
  }
}

$("#checking .deposit").on("click", handleChecking);
$("#checking .withdraw").on("click", handleCheckingWithdraw);
$("#savings .deposit").on("click", handleSavings);
$("#savings .withdraw").on("click", handleSavingsWithdraw);
