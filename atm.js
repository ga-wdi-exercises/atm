var atm = {
  currentInput: 0,
  checkingBalance: 0,
  buttonInitialize: function() {
    $(".checking-deposit").click(this.checkingDeposit);
    // $(".checking-withdrawal").click(this.checkingWithdrawal);
  },
  checkingInput: function() {
    var self = atm;

    self.currentInput = parseInt($(".checking").val())
  },
  checkingDeposit: function() {
    var self = atm;

    self.checkingInput();

    self.checkingBalance += self.currentInput;

    console.log(self.checkingBalance);

    $("#checking_balance").html("$" + self.checkingBalance);
  }

}

atm.buttonInitialize();
