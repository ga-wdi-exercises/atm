/*
-Users can deposit money into one of the bank accounts
  *create variable for deposits and initial value of 0
    *associated function needs to add input "amount" to current account total
-Users can withdraw money from one of the bank accounts
  *create object with a withdrawal key and initial value of 0
    *associated function needs to remove input "amount" from current account total
-Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
  *
-The color of a bank account should reflect its balance. (There's a CSS class -called .zero already written for this.)
  *write a condition that when account reaches zero, the class will change .zero

Get [amount] entered into account field > store it in a variable
Add it to accountTotal

on click of accountDeposit, add [amount] to [accountTotal]
  *get account

/REVERSE FOLLOWING FOR OTHER ACCOUNT/
withdraw on click function: accountWithdraw:
  if [(amount > (accountTotal+otherAccountTotal)]
      alert("Insufficient cumulative funds.Please enter an amount not to exceed $" [accountTotal+otherAccountTotal])
  else if (amount = accountTotal), accountTotal-amount and change background to red for that account.
  else if [(accountTotal > amount]
      accountTotal-amount > store as new accountTotal

  Why can't I store
  parseInt($("#checking .input").val(),10)
  in a variable?? I only seems to work if I put it directly into a function...
*/
var checkingInput = $("#checking .input");
var savingsInput = $("#savings .input");

var checkingBalance = $("#checking .balance");
var savingsBalance = $("#savings .balance");

var checkingAccount = $("#checking");
var savingsAccount = $("#savings");

var checkingWithdraw = $("#checking .withdraw");
var checkingDeposit = $("#checking .deposit");

var savingsWithdraw = $("#savings .withdraw");
var savingsDeposit = $("#savings .deposit");

var checkingCurrent = 0;
var savingsCurrent = 0;

var checkingZero = function() {
  if (checkingCurrent === 0) {
    checkingAccount.attr("class", "zero")
  } else if (checkingCurrent > 0) {
    checkingAccount.attr("class", "account");
  }
}

var savingsZero = function() {
  if (savingsCurrent === 0) {
    savingsAccount.attr("class", "zero")
  } else if (savingsCurrent > 0) {
    savingsAccount.attr("class", "account");
  }
}


var removeFromTotalChecking = function() {
  if (parseInt(checkingInput.val(),10) < checkingCurrent) {
    checkingBalance.html("$" + (checkingCurrent - parseInt(checkingInput.val(),10)));
    checkingCurrent = checkingCurrent - parseInt(checkingInput.val(),10);
    checkingZero();
    savingsZero();
  } else if (parseInt(checkingInput.val(),10) === checkingCurrent) {
    checkingBalance.html("$" + (0));
    checkingCurrent = 0;
    checkingZero();
    savingsZero();
  } else if (parseInt(checkingInput.val(),10) === (checkingCurrent + savingsCurrent)) {
    checkingBalance.html("$" + (0));
    checkingCurrent = 0;
    savingsBalance.html("$" + (0));
    savingsCurrent = 0;
    checkingZero();
    savingsZero();
  } else if (parseInt(checkingInput.val(),10) > checkingCurrent && parseInt(checkingInput.val(),10) < (checkingCurrent + savingsCurrent)) {
    var reduceSavings = parseInt(checkingInput.val(),10) - checkingCurrent;
    checkingBalance.html("$" + (0));
    checkingCurrent = 0;
    savingsBalance.html("$" + (savingsCurrent - reduceSavings));
    savingsCurrent = savingsCurrent - reduceSavings;
    checkingZero();
    savingsZero();
  } else if (parseInt(checkingInput.val(),10) > (checkingCurrent + savingsCurrent)) {
    alert("Insufficient cumulative funds. Please enter an amount NOT to exceed $" + (checkingCurrent + savingsCurrent));
    checkingZero();
    savingsZero();
  }
}

var removeFromTotalSavings = function() {
  if (parseInt(savingsInput.val(),10) < savingsCurrent) {
    savingsBalance.html("$" + (savingsCurrent - parseInt(savingsInput.val(),10)));
    savingsCurrent = savingsCurrent - parseInt(savingsInput.val(),10);
    checkingZero();
    savingsZero();
  } else if (parseInt(savingsInput.val(),10) === savingsCurrent) {
    savingsBalance.html("$" + (0));
    savingsCurrent = 0;
    checkingZero();
    savingsZero();
  } else if (parseInt(savingsInput.val(),10) === (savingsCurrent + checkingCurrent)) {
    savingsBalance.html("$" + (0));
    savingsCurrent = 0;
    checkingBalance.html("$" + (0));
    checkingCurrent = 0;
    checkingZero();
    savingsZero();
  } else if (parseInt(savingsInput.val(),10) > savingsCurrent && parseInt(savingsInput.val(),10) < (savingsCurrent + checkingCurrent)) {
    var reduceChecking = parseInt(savingsInput.val(),10) - savingsCurrent;
    savingsBalance.html("$" + (0));
    savingsCurrent = 0;
    checkingBalance.html("$" + (checkingCurrent - reduceChecking));
    checkingCurrent = checkingCurrent - reduceChecking;
    checkingZero();
    savingsZero();
  } else if (parseInt(savingsInput.val(),10) > (savingsCurrent + checkingCurrent)) {
    alert("Insufficient cumulative funds. Please enter an amount NOT to exceed $" + (savingsCurrent + checkingCurrent));
    checkingZero();
    savingsZero();
  }
}

var addToTotalChecking = function() {
  checkingBalance.html("$" + (checkingCurrent + parseInt(checkingInput.val(),10)));
  checkingCurrent = checkingCurrent + parseInt(checkingInput.val(),10);
  checkingZero();
}

var addToTotalSavings = function() {
  savingsBalance.html("$" + (savingsCurrent + parseInt(savingsInput.val(),10)));
  savingsCurrent = savingsCurrent + parseInt(savingsInput.val(),10);
  savingsZero();
}


checkingWithdraw.on("click", removeFromTotalChecking);
checkingDeposit.on("click", addToTotalChecking);

savingsWithdraw.on("click", removeFromTotalSavings);
savingsDeposit.on("click", addToTotalSavings);
