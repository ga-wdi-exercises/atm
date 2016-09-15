// $(document).ready(function(){
//Declare all global variables
var checkingBalance = 0,
    checkingDisplay = $('#checking div.balance'),
    checkingInput = $('#checking input.input'),
    checkingDeposit = $('#checking input.deposit'),
    checkingWithdraw = $('#checking input.withdraw'),
    savingsBalance = 0,
    savingsDisplay = $('#savings div.balance'),
    savingsInput = $('#savings input.input'),
    savingsDeposit = $('#savings input.deposit'),
    savingsWithdraw = $('#savings input.withdraw');

//Object containing ATM functionality
var atm = {
  depositToChecking : function() {
    checkingBalance += eval(checkingInput.val());
    checkingDisplay.html('$'+checkingBalance);
  },
  depositToSavings : function() {
    savingsBalance += eval(savingsInput.val());
    savingsDisplay.html('$'+savingsBalance);
  },
  withdrawFromChecking : function() {
    var amount = eval(checkingInput.val());
    if (checkingBalance - amount > 0) {
      checkingBalance -= eval(checkingInput.val());
      checkingDisplay.html('$'+checkingBalance);
    } else {
      alert('There are insufficient funds in the selected account to process your request');
    };
  },
  withdrawFromSavings : function() {
    var amount = eval(savingsInput.val());
    if (savingsBalance - amount > 0) {
      savingsBalance -= eval(savingsInput.val());
      savingsDisplay.html('$'+savingsBalance);
    } else {
      alert('There are insufficient funds in the selected account to process your request');
    };
  },
  overdraftProtection : function() {
  }
};

//set event listeners to trigger ATM functionality
checkingDeposit.on('click', atm.depositToChecking);
checkingWithdraw.on('click', atm.withdrawFromChecking);
savingsDeposit.on('click', atm.depositToSavings);
savingsWithdraw.on('click', atm.withdrawFromSavings);

// });
