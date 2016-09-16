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
    checkingInput.val('');
  },
  depositToSavings : function() {
    savingsBalance += eval(savingsInput.val());
    savingsDisplay.html('$'+savingsBalance);
    savingsInput.val('');
  },
  withdrawFromChecking : function() {
    var amount = eval(checkingInput.val());
    if (checkingBalance - amount > 0) {
      checkingBalance -= amount;
      checkingDisplay.html('$'+checkingBalance);
    } else if ((savingsBalance+checkingBalance) > 0) {
      this.overdraftProtection("fromSavings", amount);
    } else {
      alert('There are insufficient funds in your account to process your request');
    };
    checkingInput.val('');
  },
  withdrawFromSavings : function() {
    var amount = eval(savingsInput.val());
    if (savingsBalance - amount > 0) {
      savingsBalance -= amount;
      savingsDisplay.html('$'+savingsBalance);
    } else if ((savingsBalance+checkingBalance) > 0) {
        this.overdraftProtection("fromChecking", amount);
    } else {
      alert('There are insufficient funds in your account to process your request');
    };
    savingsInput.val('');
  },
  overdraftProtection : function(fromAccount, amount) {
    switch (fromAccount) {
      case "fromChecking" :
        var overdraftAmount = (amount - savingsBalance);
        checkingBalance -= overdraftAmount;
        savingsBalance -= savingsBalance;
        alert('Overdraft Protection has transferred $'+overdraftAmount+' from your Checking Account to cover the withdrawal');
        break;
      case "fromSavings" :
        var overdraftAmount = (amount - checkingBalance);
        savingsBalance -= overdraftAmount;
        checkingBalance -= checkingBalance;
        alert('Overdraft Protection has transferred $'+overdraftAmount+' from your Savings Account to cover the withdrawal');
        break;
    };
    checkingDisplay.html('$'+checkingBalance);
    savingsDisplay.html('$'+savingsBalance);
  }
};

//set event listeners to trigger ATM functionality
checkingDeposit.on('click', atm.depositToChecking.bind(atm));
checkingWithdraw.on('click', atm.withdrawFromChecking.bind(atm));
savingsDeposit.on('click', atm.depositToSavings.bind(atm));
savingsWithdraw.on('click', atm.withdrawFromSavings.bind(atm));

// });
