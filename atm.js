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
    this.checkForZero(checkingBalance, checkingDisplay);
  },
  depositToSavings : function() {
    savingsBalance += eval(savingsInput.val());
    savingsDisplay.html('$'+savingsBalance);
    savingsInput.val('');
    this.checkForZero(savingsBalance, savingsDisplay);
  },
  withdrawFromChecking : function() {
    var amount = eval(checkingInput.val());
    if (checkingBalance - amount >= 0) {
      checkingBalance -= amount;
      checkingDisplay.html('$'+checkingBalance);
    } else if ((savingsBalance+checkingBalance) - amount >= 0) {
      this.overdraftProtection("fromSavings", amount);
    } else {
      alert('There are insufficient funds in your account to process your request');
    };
    this.checkForZero(checkingBalance, checkingDisplay);
    checkingInput.val('');
  },
  withdrawFromSavings : function() {
    var amount = eval(savingsInput.val());
    if (savingsBalance - amount >= 0) {
      savingsBalance -= amount;
      savingsDisplay.html('$'+savingsBalance);
    } else if ((savingsBalance+checkingBalance) - amount >= 0) {
        this.overdraftProtection("fromChecking", amount);
    } else {
      alert('There are insufficient funds in your account to process your request');
    };
    this.checkForZero(savingsBalance, savingsDisplay);
    savingsInput.val('');
  },
  overdraftProtection : function(fromAccount, amount) {
    switch (fromAccount) {
      case "fromChecking" :
        var overdraftAmount = (amount - savingsBalance);
        checkingBalance -= overdraftAmount;
        savingsBalance -= savingsBalance;
        this.checkForZero(checkingBalance, checkingDisplay);
        this.checkForZero(savingsBalance, savingsDisplay);
        alert('Overdraft Protection has transferred $'+overdraftAmount+' from your Checking Account to cover the withdrawal');
        break;
      case "fromSavings" :
        var overdraftAmount = (amount - checkingBalance);
        savingsBalance -= overdraftAmount;
        checkingBalance -= checkingBalance;
        this.checkForZero(checkingBalance, checkingDisplay);
        this.checkForZero(savingsBalance, savingsDisplay);
        alert('Overdraft Protection has transferred $'+overdraftAmount+' from your Savings Account to cover the withdrawal');
        break;
    };
    checkingDisplay.html('$'+checkingBalance);
    savingsDisplay.html('$'+savingsBalance);
  },
  checkForZero : function(accountBalance, accountDisplay) {
    if (accountBalance == 0) {
      accountDisplay.css('color','red');
    } else {
      accountDisplay.css('color','black');
    }
  }
};

//set event listeners to trigger ATM functionality
checkingDeposit.on('click', atm.depositToChecking.bind(atm));
checkingWithdraw.on('click', atm.withdrawFromChecking.bind(atm));
savingsDeposit.on('click', atm.depositToSavings.bind(atm));
savingsWithdraw.on('click', atm.withdrawFromSavings.bind(atm));

// });
