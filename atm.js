
function Account(balance, input, depositButton, withdrawButton) {
  this.balance = balance;
  this.input = input;
  this.depositButton = depositButton;
  this.withdrawButton = withdrawButton;
}
// I tried to make these functions prototype methods but it got messed up
// when I tried to use "this" in the click event. "This" was no longer pointing to the account object


function checkingDeposit() {
  var currentBal = parseInt(checking.balance.html().replace("$", ""));
  currentBal += parseInt(checking.input.val());
  checking.balance.html("$" + currentBal);
  checking.input.val("");
}

function savingsDeposit() {
  var currentBal = parseInt(savings.balance.html().replace("$", ""));
  currentBal += parseInt(savings.input.val());
  savings.balance.html("$" + currentBal);
  savings.input.val("");
}

function checkingWithdraw() {
  var currentBal = parseInt(checking.balance.html().replace("$", ""));
  var savingsBal = parseInt(savings.balance.html().replace("$", ""));
  var remainingBal = currentBal - parseInt(checking.input.val());

  if (remainingBal < 0) {
    if (remainingBal + savingsBal < 0) {
      console.log("no.");
    } else {
      checking.balance.html("$0");
      savingsBal += remainingBal;
      savings.balance.html("$" + savingsBal);
    }
  } else {
    checking.balance.html("$" + remainingBal);
  }
  checking.input.val("");
}

function savingsWithdraw() {
  var currentBal = parseInt(savings.balance.html().replace("$", ""));
  var checkingBal = parseInt(checking.balance.html().replace("$", ""));
  var remainingBal = currentBal - parseInt(savings.input.val());

  if (remainingBal < 0) {
    if (remainingBal + checkingBal < 0) {
      console.log("no.");
    } else {
      savings.balance.html("$0");
      checkingBal += remainingBal;
      checking.balance.html("$" + checkingBal);
    }
  } else {
    savings.balance.html("$" + remainingBal);
  }
  savings.input.val("");
}

var checking = new Account($("#checking_balance"), $("#checking_input"), $("#checking_deposit"), $("#checking_withdraw"));

var savings = new Account($("#savings_balance"), $("#savings_input"), $("#savings_deposit"), $("#savings_withdraw"));

checking.depositButton.on("click", function() {
  checkingDeposit();
  if (parseInt(checking.balance.html().replace("$", "")) > 0) {
    checking.balance.removeClass("zero");
  }
});
checking.withdrawButton.on("click", function() {
  checkingWithdraw();
  if (parseInt(checking.balance.html().replace("$", "")) === 0) {
    checking.balance.addClass("zero");
  }
});
savings.depositButton.on("click", function() {
  savingsDeposit();
  if (parseInt(savings.balance.html().replace("$", "")) > 0) {
    savings.balance.removeClass("zero");
  }
});
savings.withdrawButton.on("click", function() {
  savingsWithdraw();
  if (parseInt(savings.balance.html().replace("$", "")) === 0) {
    savings.balance.addClass("zero");
  }
});
