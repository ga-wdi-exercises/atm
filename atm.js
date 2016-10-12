$(document).ready(function(){

  var checkingDepositButton =  $("#checking>input.deposit");
  var checkingWithdrawButton =  $("#checking>input.withdraw");
  var checkingInput = $("#checking>input.input");
  var checkingDisplay =  $("#checking>.balance");

  var savingsDepositButton = $("#savings>input.deposit");
  var savingsWithdrawButton = $("#savings>input.withdraw");

  var checkingTotal = 0;

  checkingDepositButton.on("click",depositChecking);
  checkingWithdrawButton.on("click", withdrawChecking)

  function withdrawChecking() {

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
