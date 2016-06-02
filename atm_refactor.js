$(document).ready(function() {
  var savingsDep = $("#savings .deposit");
  var savingsBal = $("#savings .balance");
  var savingsInput = $("#savings .input");
  var savingsAmt = 0;

  var checkingDep = $("#checking .deposit");
  var checkingBal = $("#checking .balance");
  var checkingInput = $("#checking .input");
  var checkingAmt = 0;
  checkSavings();

  checkingDep.on("click", checkingDeposit);
  savingsDep.on("click", savingsDeposit);

  function checkingDeposit() {
    checkingAmt += parseInt(checkingInput.val());
    checkingBal.text("$"+checkingAmt);
  }

  function savingsDeposit() {
    savingsAmt += parseInt(savingsInput.val());
    savingsBal.text("$"+savingsAmt);
    checkSavings();
  }

  function checkSavings() {
    if (savingsAmt == 0) {
      savingsBal.addClass("zero");
    }
    else {
      savingsBal.removeClass("zero");
    }
  }
});
