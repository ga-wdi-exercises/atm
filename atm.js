$(document).ready(function(){
  var checkingDepositButton =  $("#checking>input.deposit");
  var checkingWithdrawButton =  $("#checking>input.withdraw");
  var checkingInput = $("#checking>input.input");
  var checkingDisplay =  $("#checking>.balance");


  var checkingAccount = {
    total: 0,
    input_field: $("#checking>input.input"),
    display: $("#checking>.balance"),
    deposit_button: $("#checking>input.deposit"),
    withdraw_button: $("#checking>input.withdraw"),
    get_value: function () {
      var amount = parseFloat(this.input_field.val());
      var amount = Number(amount);
      console.log(typeof amount);
      return amount;
    },deposit: function () {
      this.total += this.get_value();
      this.display.text(`\$${this.total.toFixed(2)}`);
    },withdraw: function() {
      this.total -= this.get_value();
      this.display.text(`\$${this.total.toFixed(2)}`);
    }
  }

  var savingsAccount = {
    total: 0,
    input_field: $("#savings>input.input"),
    display: $("#savings>div.balance"),
    deposit_button: $("#savings>input.deposit"),
    withdraw_button: $("#savings>input.withdraw"),
    get_value: function () {
      var amount = parseFloat(this.input_field.val());
      var amount = Number(amount);
      console.log(typeof amount);
      return amount;
    },
    deposit: function () {
      this.total += this.get_value();
      this.display.text(`\$${this.total.toFixed(2)}`);
    },
    withdraw: function() {
      this.total -= this.get_value();
      this.display.text(`\$${this.total.toFixed(2)}`);
    }
  }

  savingsAccount.deposit_button.on("click", savingsAccount.deposit.bind(savingsAccount));
  savingsAccount.withdraw_button.on("click", savingsAccount.withdraw.bind(savingsAccount));

  checkingAccount.deposit_button.on("click", checkingAccount.deposit.bind(checkingAccount));
  checkingAccount.withdraw_button.on("click", checkingAccount.withdraw.bind(checkingAccount));

});
