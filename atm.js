var atm = {
  currentInput: 0,
  checkingBalance: 0,
  savingsBalance: 0,
  overage: 0,
  buttonInitialize: function() {
    $(".checking-deposit").click(this.checkingDeposit);
    $(".checking-withdrawal").click(this.checkingWithdrawal);
    $(".savings-deposit").click(this.savingsDeposit);
    $(".savings-withdrawal").click(this.savingsWithdrawal);
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

    if (self.checkingBalance <= 0) {
      $("#checking_balance").html("$0").css("background-color", "red");

      self.overage = self.checkingBalance - self.currentInput;

      self.checkingOverage();

      return;
    };

    $("#checking_balance").html("$" + self.checkingBalance);
  },
  checkingOverage: function() {
    var self = atm;

    self.savingsBalance += self.overage;

    $("#savings_balance").html("$" + self.savingsBalance);
  },
  savingsDeposit: function() {
    var self = atm;

    self.savingsInput();

    self.savingsBalance += self.currentInput;

    $("#savings_balance").html("$" + self.savingsBalance);
  },
  savingsWithdrawal: function() {
    var self = atm;

    self.savingsInput();

    self.savingsBalance -= self.currentInput;

    if (self.savingsBalance <= 0) {
      $("#savings_balance").html("$0").css("background-color", "red");

      self.overage = self.savingsBalance - self.currentInput;

      self.savingsOverage();

      return;
    };

    $("#savings_balance").html("$" + self.savingsBalance);
  },
  savingsOverage: function() {
    var self = atm;

    self.checkingBalance += self.overage;

    console.log(self.overage);

    $("#checking_balance").html("$" + self.checkingBalance);
  },
}

atm.buttonInitialize();
