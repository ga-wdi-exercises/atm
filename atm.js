$(document).ready(function(){

var checkingBalance = 0;
var savingsBalance = 0;
var totalBalance = (checkingBalance + savingsBalance);

var checkingDeposit = $("#checking .deposit");
var checkingWithdraw = $("#checking .withdraw");
var displayCheckingBalance = $("#checking .balance");
var checkingInput = $("#checking .input");

var savingsDeposit = $("#savings .deposit");
var savingsWithdraw = $("#savings .withdraw");
var displaySavingsBalance = $("#savings .balance");
var savingsInput = $("#savings .input");

/* Checking */

checkingDeposit.on("click", depositCheckingMoney);

function depositCheckingMoney() {
  var checkingEntry = Number($(checkingInput).val());
  checkingBalance += checkingEntry;
  totalBalance += checkingBalance;
  displayCheckingBalance.html("$" + Number(checkingBalance));
}

checkingWithdraw.on("click", withdrawCheckingMoney);

function withdrawCheckingMoney() {
  var checkingEntry = Number($(checkingInput).val());

    if (checkingEntry > checkingBalance) {
      if (checkingEntry <= totalBalance) {
      checkingEntry -= checkingBalance;
      checkingBalance = 0;
      savingsBalance -= checkingEntry;
      totalBalance = (checkingBalance + savingsBalance);
      displayCheckingBalance.html("$" + Number(checkingBalance));
      displaySavingsBalance.html("$" + Number(savingsBalance));
      return;
  } else {
    alert("ERROR");
    return;
  }
  }

  checkingBalance -= checkingEntry;
  // totalBalance -= checkingBalance;
  displayCheckingBalance.html("$" + Number(checkingBalance));
}

/* Savings */

savingsDeposit.on("click", depositSavingsMoney);

function depositSavingsMoney() {
  var savingsEntry = Number($(savingsInput).val());
  savingsBalance += savingsEntry;
  totalBalance += savingsBalance;
  displaySavingsBalance.html("$" + Number(savingsBalance));
}

savingsWithdraw.on("click", withdrawSavingsMoney);

function withdrawSavingsMoney() {
  var savingsEntry = Number($(savingsInput).val());

  if (savingsEntry > savingsBalance) {
    if (savingsEntry <= totalBalance) {
    savingsEntry -= savingsBalance;
    savingsBalance = 0;
    checkingBalance -= savingsEntry;
    totalBalance = (checkingBalance + savingsBalance);
    displayCheckingBalance.html("$" + Number(checkingBalance));
    displaySavingsBalance.html("$" + Number(savingsBalance));
    return;
} else {
  alert("ERROR");
  return;
}
}

  savingsBalance -= savingsEntry;
  totalBalance -= checkingBalance;
  displaySavingsBalance.html("$" + Number(savingsBalance));
}

// /* Bonus */


});
