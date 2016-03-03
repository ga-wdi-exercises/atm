$(document).ready(function(){

  var checkingDepositBtn = $("#checkingDepositBtn");
  var checkingWithdrawalBtn = $("#checkingWithdrawalBtn");
  var checkingDisplay = $("#checkingAccount > .balance");
  var checkingBalance = parseInt(checkingDisplay.html().replace("$" , ""));
  var savingsDepositBtn = $("#savingsDepositBtn");
  var savingsWithdrawalBtn = $("#savingsWithdrawalBtn");
  var savingsDisplay = $("#savingsAccount > .balance");
  var savingsBalance = parseInt(savingsDisplay.html().replace("$" , ""));


  // Checking account handled here

  checkingDepositBtn.click(depositChecking);
  checkingWithdrawalBtn.click(withdrawChecking);

  function depositChecking() {
    var userInput = parseInt($("#checkingField").val());
    checkingBalance += userInput;
    checkingDisplay.html("$" + checkingBalance);
  }

  function withdrawChecking() {
    var userInput = parseInt($("#checkingField").val());
    var overdraft = checkingBalance + savingsBalance;
    if ((userInput > checkingBalance) && (userInput <= overdraft)) {
        overdraft -= userInput;
        checkingBalance = 0;
        checkingDisplay.html("$" + checkingBalance);
        savingsDisplay.html("$" + overdraft);
    } else if (userInput <= checkingBalance) {
        checkingBalance -= userInput;
        checkingDisplay.html("$" + checkingBalance);
      }
  }

  // Savings account handled here

  savingsDepositBtn.click(depositSavings);
  savingsWithdrawalBtn.click(withdrawSavings);

  function depositSavings() {
    var userInput = parseInt($("#savingsField").val());
    savingsBalance += userInput;
    savingsDisplay.html("$" + savingsBalance);
  }

  function withdrawSavings() {
    var userInput = parseInt($("#savingsField").val());
    var overdraft = checkingBalance + savingsBalance;
    if ((userInput > savingsBalance) && (userInput <= overdraft)) {
      overdraft -= userInput;
      savingsBalance = 0;
      savingsDisplay.html("$" + savingsBalance);
      checkingDisplay.html("$" + overdraft);
    } else if   (userInput <= savingsBalance) {
      savingsBalance -= userInput;
      savingsDisplay.html("$" + savingsBalance);
    }
  }

});
