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
  var checkingInput = parseInt($("#checking input.input").val());
    if (checking >= checkingInput) {
      checking = (checking - checkingInput);
      checkingBalance.text("$" + checking);
    } else {
    alert("Sorry. You don't have enough money. Select a lower amount.");
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
    if (savings >= savingsInput) {
      savings = (savings - savingsInput);
      savingsBalance.text("$" + savings);
    } else {
        alert("Sorry. You don't have enough money.");
  }
}

$("#checking .deposit").on("click", handleChecking);
$("#checking .withdraw").on("click", handleCheckingWithdraw);
$("#savings .deposit").on("click", handleSavings);
$("#savings .withdraw").on("click", handleSavingsWithdraw);
