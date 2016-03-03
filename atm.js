var atm = {
  currentInput: 0,
  checkingBalance: 0,
  savingsBalance: 0,
  buttonInitialize: function() {
    $(".checking-deposit").click(this.checkingDeposit);
    $(".checking-withdrawal").click(this.checkingWithdrawal);
    $(".savings-deposit").click(this.savingsDeposit);
    //$(".savings-withdrawal").click(this.savingsWithdrawal);
  },
  checkingInput: function() {
    var self = atm;

    self.currentInput = parseInt($(".checking").val());
  },
  savingsInput: function() {
    var self = atm;

    self.currentInput = parseInt($(".savings").val());
  },
  checkingDeposit: function() {
    var self = atm;

    self.checkingInput();

    self.checkingBalance += self.currentInput;

    $("#checking_balance").html("$" + self.checkingBalance);
  },
  checkingWithdrawal: function() {
    var self = atm;

    self.checkingInput();

    self.checkingBalance -= self.currentInput;

    $("#checking_balance").html("$" + self.checkingBalance);
  },
  savingsDeposit: function() {
    var self = atm;

    self.savingsInput();

    self.savingsBalance += self.currentInput;

    $("#savings_balance").html("$" + self.savingsBalance);
  }

}

atm.buttonInitialize();
