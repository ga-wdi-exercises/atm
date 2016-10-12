$(document).ready(function(){

  var checkingDepositButton =  $("#checking>input.deposit");
  var checkingWithdrawButton =  $("#checking>input.withdraw");
  var checkingInput = $("#checking>input.input");
  var checkingDisplay =  $("#checking>.balance");
  //
  // function Account (total) {
  //   this.total = total;
  //   this.deposit_button = $("#savings>input.deposit");
  //
  // } //
  //
  // Account.prototype = {
  //   addDepositListener: function() {
  //     var self = this;
  //     this.deposit_button.on("click",function(){
  //       self.deposit;
  //     })
  //   },
  //   deposit: function() {
  //     console.log(this);
  //   }
  // }
  //
  // var savingsAccount = new Account(0);

  var savingsAccount = {
    total: 0.00,
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
      console.log(this)
      this.total += this.get_value();
      this.display.text(`\$${this.total}`);
    }
  };

  // var savingsDepositButton = $("#savings>input.deposit");
  // var savingsWithdrawButton = $("#savings>input.withdraw");
  // var savingsDisplay =  $("#savings>div.balance");
  // var savingsInput = $("#savings>input.input");
  //
  // var checkingTotal = 0;

  // checkingDepositButton.on("click",depositChecking);
  // checkingWithdrawButton.on("click", withdrawChecking)

  // savingsAccount.withdraw_button.on("click", withdrawSavings);
  savingsAccount.deposit_button.on("click", savingsAccount.deposit.bind(this))

  // function depositSavings() {
  //   var amount = savingsAccount.get_value();
  //   savingsAccount.total += amount;
  //   console.log(typeof savingsAccount.total)
  //   console.log(savingsAccount.total)
  //   console.log(typeof savingsAccount.total)
  //   savingsAccount.display.text(`${savingsAccount.total}`)
  // }

  // function withdrawSavings(event) {
  //   var amount = savingsAccount.get_value();
  //   savingsTotal -= amount;
  //   updateTotal(savingsTotal, savingsDisplay);
  // }
  //
  // function depositChecking(event) {
  //   var amount = parseFloat(checkingInput.val());
  //   amount.toFixed(2);
  //   checkingTotal += amount;
  //   updateTotal(checkingTotal, checkingDisplay);
  //   }

    function withdrawChecking(event) {
      var amount = parseFloat(checkingInput.val());
      amount.toFixed(2);
      checkingTotal -= amount;
      updateTotal(checkingTotal, checkingDisplay);
    }

    function updateTotal(amount, displayLocator) {
      console.log(amount);
      console.log(typeof amount);
      $(displayLocator).empty();
      $(displayLocator).text(`\$${amount}`);
    }

});
