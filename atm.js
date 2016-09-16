
var checkingZero = function() {
  if (atm.checking.current === 0) {
    atm.checking.account.attr("class", "zero")
  } else if (atm.checking.current > 0) {
    atm.checking.account.attr("class", "account");
  }
}

var savingsZero = function() {
  if (atm.savings.current === 0) {
    atm.savings.account.attr("class", "zero")
  } else if (atm.savings.current > 0) {
    atm.savings.account.attr("class", "account");
  }
}

var atm = {
  checking: {
    input: $("#checking .input"),
    balance: $("#checking .balance"),
    account: $("#checking"),
    withdrawButton: $("#checking .withdraw"),
    depositButton: $("#checking .deposit"),
    current: 0,
    deposit: function() {
      this.balance.html("$" + (this.current + parseInt(this.input.val(),10)));
      this.current = this.current + parseInt(this.input.val(),10);
      checkingZero();
    },
    withdraw: function() {
      if (parseInt(this.input.val(),10) < this.current) {
        this.balance.html("$" + (this.current - parseInt(this.input.val(),10)));
        this.current = this.current - parseInt(this.input.val(),10);
        checkingZero();
      } else if (parseInt(this.input.val(),10) === this.current) {
        this.balance.html("$" + (0));
        this.current = 0;
        checkingZero();
      } else if (parseInt(this.input.val(),10) === (this.current + atm.savings.current)) {
        this.balance.html("$" + (0));
        this.current = 0;
        atm.savings.balance.html("$" + (0));
        atm.savings.current = 0;
        checkingZero();
        savingsZero();
      } else if (parseInt(this.input.val(),10) > this.current && parseInt(this.input.val(),10) < (this.current + atm.savings.current)) {
        var reduceSavings = parseInt(this.input.val(),10) - this.current;
        this.balance.html("$" + (0));
        this.current = 0;
        atm.savings.balance.html("$" + (atm.savings.current - reduceSavings));
        atm.savings.current = atm.savings.current - reduceSavings;
        checkingZero();
        savingsZero();
      } else if (parseInt(this.input.val(),10) > (this.current + atm.savings.current)) {
        alert("Insufficient cumulative funds. Please enter an amount NOT to exceed $" + (this.current + atm.savings.current));
        checkingZero();
        savingsZero();
      }
    }
  },

  savings: {
    input: $("#savings .input"),
    balance: $("#savings .balance"),
    account: $("#savings"),
    withdrawButton: $("#savings .withdraw"),
    depositButton: $("#savings .deposit"),
    current: 0,
    deposit: function() {
      this.balance.html("$" + (this.current + parseInt(this.input.val(),10)));
      this.current = this.current + parseInt(this.input.val(),10);
      savingsZero();
    },
    withdraw: function() {
      if (parseInt(this.input.val(),10) < this.current) {
        this.balance.html("$" + (this.current - parseInt(this.input.val(),10)));
        this.current = this.current - parseInt(this.input.val(),10);
        savingsZero();
      } else if (parseInt(this.input.val(),10) === this.current) {
        this.balance.html("$" + (0));
        this.current = 0;
        savingsZero();
      } else if (parseInt(this.input.val(),10) === (this.current + atm.checking.current)) {
        this.balance.html("$" + (0));
        this.current = 0;
        atm.checking.balance.html("$" + (0));
        atm.checking.current = 0;
        checkingZero();
        savingsZero();
      } else if (parseInt(this.input.val(),10) > this.current && parseInt(this.input.val(),10) < (this.current + atm.checking.current)) {
        var reduceSavings = parseInt(this.input.val(),10) - this.current;
        this.balance.html("$" + (0));
        this.current = 0;
        atm.checking.balance.html("$" + (atm.checking.current - reduceSavings));
        atm.checking.current = atm.checking.current - reduceSavings;
        checkingZero();
        savingsZero();
      } else if (parseInt(this.input.val(),10) > (this.current + atm.checking.current)) {
        alert("Insufficient cumulative funds. Please enter an amount NOT to exceed $" + (this.current + atm.checking.current));
        checkingZero();
        savingsZero();
      }
    }
  }
}

atm.checking.withdrawButton.on("click", atm.checking.withdraw.bind(atm.checking));
atm.checking.depositButton.on("click", atm.checking.deposit.bind(atm.checking));
atm.savings.withdrawButton.on("click", atm.savings.withdraw.bind(atm.savings));
atm.savings.depositButton.on("click", atm.savings.deposit.bind(atm.savings));
