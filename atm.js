$(document).ready(function(){

  var checkingDepositButton =  $("#checking>input.deposit");
  var checkingWithdrawButton =  $("#checking>input.withdraw");

  var savingsDepositButton = $("#savings>input.deposit");
  var savingsWithdrawButton = $("#savings>input.withdraw");

  var checkingTotal = 0;

  checkingDepositButton.on("click",depositChecking);

  function withdrawChecking() {

  }

  function depositChecking(event) {
    var amount = parseFloat($("#checking>input.input").val());
    checkingTotal += amount;
    updateTotal(checkingTotal,"#checking>.balance");
    }

    function updateTotal(amount, displayLocator) {
      $(displayLocator).empty();
      $(displayLocator).text(`\$${amount}`);
    }

});
