$(document).ready(function(){

  var checkingDepositButton =  $("#checking>input.deposit");
  var checkingWithdrawButton =  $("#checking>input.withdraw");
  var checkingInput = $("#checking>input.input");
  var checkingDisplay =  $("#checking>.balance");

  var savingsDepositButton = $("#savings>input.deposit");
  var savingsWithdrawButton = $("#savings>input.withdraw");
  var savingsDisplay =  $("#savings>div.balance");
  var savingsInput = $("#savings>input.input");

  var checkingTotal = 0;
  var savingsTotal = 0;

  checkingDepositButton.on("click",depositChecking);
  checkingWithdrawButton.on("click", withdrawChecking)

  savingsWithdrawButton.on("click", withdrawSavings);
  savingsDepositButton.on("click", depositSavings)

  function depositSavings() {
    var amount = parseFloat(savingsInput.val());
    amount.toFixed(2);
    savingsTotal += amount;
    updateTotal(savingsTotal, savingsDisplay);
  }

  function withdrawSavings(event) {
    var amount = parseFloat(savingsInput.val());
    amount.toFixed(2);
    savingsTotal -= amount;
    updateTotal(savingsTotal, savingsDisplay);
  }

  function depositChecking(event) {
    var amount = parseFloat(checkingInput.val());
    amount.toFixed(2);
    checkingTotal += amount;
    updateTotal(checkingTotal, checkingDisplay);
    }

    function withdrawChecking(event) {
      var amount = parseFloat(checkingInput.val());
      amount.toFixed(2);
      checkingTotal -= amount;
      updateTotal(checkingTotal, checkingDisplay);
    }

    function updateTotal(amount, displayLocator) {
      $(displayLocator).empty();
      $(displayLocator).text(`\$${amount.toFixed(2)}`);
    }

});
