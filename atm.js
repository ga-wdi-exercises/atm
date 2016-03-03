$(document).ready(function(){

  // Checking account handled here

  var checkingDepositBtn = $("#checkingDepositBtn");
  var checkingWithdrawalBtn = $("#checkingWithdrawalBtn");
  var checkingDisplay = $("#checkingAccount > .balance");
  var checkingBalance = parseInt(checkingDisplay.html().replace("$" , ""));

  checkingDepositBtn.click(depositChecking);
  checkingWithdrawalBtn.click(withdrawChecking);

  function depositChecking() {
    var userInput = parseInt($("#checkingField").val());
    checkingBalance += userInput;
    checkingDisplay.html("$" + checkingBalance);
  }

  function withdrawChecking() {
    var userInput = parseInt($("#checkingField").val());
    if (userInput < checkingBalance) {
      checkingBalance -= userInput;
      checkingDisplay.html("$" + checkingBalance);
    } else if (userInput === checkingBalance) {
      checkingDisplay.addClass("zero");
    }
  }

  // Savings account handled here

  var savingsDepositBtn = $("#savingsDepositBtn");
  var savingsWithdrawalBtn = $("#savingsWithdrawalBtn");
  var savingsDisplay = $("#savingsAccount > .balance");
  var savingsBalance = parseInt(savingsDisplay.html().replace("$" , ""));

  savingsDepositBtn.click(depositSavings);
  savingsWithdrawalBtn.click(withdrawSavings);

  function depositSavings() {
    var userInput = parseInt($("#savingsField").val());
    savingsBalance += userInput;
    savingsDisplay.html("$" + savingsBalance);
  }

  function withdrawSavings() {
    var userInput = parseInt($("#savingsField").val());
    if (userInput < savingsBalance) {
      savingsBalance -= userInput;
      savingsDisplay.html("$" + savingsBalance);
    } else if (userInput === savingsBalance) {
      savingsDisplay.addClass("zero");
    }
  }


});
