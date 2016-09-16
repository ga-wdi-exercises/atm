
var checkingZero = function() {
    if (checking.current === 0) {
      checking.account.attr("class", "zero")
    } else if (checking.current > 0) {
      checking.account.attr("class", "account");
  }
}

var savingsZero = function() {
    if (savings.current === 0) {
      savings.account.attr("class", "zero")
    } else if (savings.current > 0) {
      savings.account.attr("class", "account");
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
    zeroCheck: function() {
      checkingZero();
      savingsZero();
    },
    deposit: function() {
      $(this).balance.html("$" + ($(this).current + parseInt($(this).input.val(),10)));
      $(this).current = $(this).current + parseInt($(this).input.val(),10);
      $(this).zeroCheck;
    },
    withdraw: function() {
      if (parseInt($(this).input.val(),10) < $(this).current) {
        $(this).balance.html("$" + ($(this).current - parseInt($(this).input.val(),10)));
        $(this).current = $(this).current - parseInt($(this).input.val(),10);
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) === $(this).current) {
        $(this).balance.html("$" + (0));
        $(this).current = 0;
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) === ($(this).current + savings.current)) {
        $(this).balance.html("$" + (0));
        $(this).current = 0;
        savings.balance.html("$" + (0));
        savings.current = 0;
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) > $(this).current && parseInt($(this).input.val(),10) < ($(this).current + savings.current)) {
        var reduceSavings = parseInt($(this).input.val(),10) - $(this).current;
        $(this).balance.html("$" + (0));
        $(this).current = 0;
        savings.balance.html("$" + (savings.current - reduceSavings));
        savings.current = savings.current - reduceSavings;
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) > ($(this).current + savings.current)) {
        alert("Insufficient cumulative funds. Please enter an amount NOT to exceed $" + ($(this).current + savings.current));
        $(this).zeroCheck;
      }
      }
  },

  savings = {
    input: $("#savings .input"),
    balance: $("#savings .balance"),
    account: $("#savings"),
    withdrawButton: $("#savings .withdraw"),
    depositButton: $("#savings .deposit"),
    current: 0,
    deposit: function() {
      $(this).balance.html("$" + ($(this).current + parseInt($(this).input.val(),10)));
      $(this).current = $(this).current + parseInt($(this).input.val(),10);
      $(this).zeroCheck;
    },
    withdraw: function() {
      if (parseInt($(this).input.val(),10) < $(this).current) {
        $(this).balance.html("$" + ($(this).current - parseInt($(this).input.val(),10)));
        $(this).current = $(this).current - parseInt($(this).input.val(),10);
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) === $(this).current) {
        $(this).balance.html("$" + (0));
        $(this).current = 0;
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) === ($(this).current + savings.current)) {
        $(this).balance.html("$" + (0));
        $(this).current = 0;
        savings.balance.html("$" + (0));
        savings.current = 0;
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) > $(this).current && parseInt($(this).input.val(),10) < ($(this).current + savings.current)) {
        var reduceSavings = parseInt($(this).input.val(),10) - $(this).current;
        $(this).balance.html("$" + (0));
        $(this).current = 0;
        savings.balance.html("$" + (savings.current - reduceSavings));
        savings.current = savings.current - reduceSavings;
        $(this).zeroCheck;
      } else if (parseInt($(this).input.val(),10) > ($(this).current + savings.current)) {
        alert("Insufficient cumulative funds. Please enter an amount NOT to exceed $" + ($(this).current + savings.current));
        $(this).zeroCheck;
      }
      }
    }

atm.checking.withdrawButton.on("click", atm.checking.withdraw);
atm.checking.depositButton.on("click", atm.checking.deposit);
atm.savings.withdrawButton.on("click", atm.savings.withdraw);
atm.savings.depositButton.on("click", atm.savings.deposit);
