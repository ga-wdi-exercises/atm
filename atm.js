$(document).ready(function(){

/* Checking */

var checkingBalance = 0;

var checkingDeposit = $("#checking .deposit");
var displayCheckingBalance = $("#checking .balance");
var checkingInput = $("#checking .input");

checkingDeposit.on("click", depositCheckingMoney);

function depositCheckingMoney() {
  var checkingEntry = Number($(checkingInput).val());
  checkingBalance += checkingEntry;
  displayCheckingBalance.html("$" + Number(checkingBalance));
  // displayCheckingBalance.val(checkingBalance);
}

var checkingWithdraw = $("#checking .withdraw");

checkingWithdraw.on("click", withdrawCheckingMoney);

function withdrawCheckingMoney() {
  var checkingEntry = Number($(checkingInput).val());
  checkingBalance -= checkingEntry;
  displayCheckingBalance.html("$" + Number(checkingBalance));
  displayCheckingBalance.val(checkingBalance);
}

/* Savings */

var savingsBalance = 0;

var savingsDeposit = $("#savings .deposit");
var displaySavingsBalance = $("#savings .balance");
var savingsInput = $("#savings .input");

savingsDeposit.on("click", depositSavingsMoney);

function depositSavingsMoney() {
  var savingsEntry = Number($(savingsInput).val());
  savingsBalance += savingsEntry;
  displaySavingsBalance.html("$" + Number(savingsBalance));
  displaySavingsBalance.val(savingsBalance);
}

var savingsWithdraw = $("#savings .withdraw");

savingsWithdraw.on("click", withdrawSavingsMoney);

function withdrawSavingsMoney() {
  var savingsEntry = Number($(savingsInput).val());
  savingsBalance -= savingsEntry;
  displaySavingsBalance.html("$" + Number(savingsBalance));
  displaySavingsBalance.val(savingsBalance);
}

// /* Bonus */
//
// if (checkingInput.val() > (Number(checkingBalance) + Number(withdrawBalance)) {
//   alert("ERROR");
// } else {
//   alert("IT WORKS");
// }

});
