
$(document).ready(function(){

var checkingBalance = $("#checking_balance");
var checkingEntry = $("#checkingEntry");
var savingsBalance = $("#savings_balance");
var savingsEntry = $("#savingsEntry");

  $('#depositChecking').on("click", function() {
    checkingBalance.text("$" + (parseInt(checkingBalance.html().replace("$", "")) + parseInt(checkingEntry.val())));
    checkingEntry.val('');
    checkingEntry.focus();
  });

  $('#withdrawChecking').on("click", function() {
    checkingBalance.text("$" + (parseInt(checkingBalance.html().replace("$", "")) - parseInt(checkingEntry.val())));
    checkingEntry.val('');
    checkingEntry.focus();
    if (checkingEntry.val() > parseInt(checkingBalance.html().replace("$", ""))) {
      var difference = checkingEntry.val() - parseInt(checkingBalance.html().replace("$", ""));
      checkingBalance.text("$0");
      if (parseInt(savingsBalance.html().replace("$", "")) > difference) {
        savingsBalance.text("$" + (parseInt(savingsBalance.html().replace("$", "")) - difference));
      } else {
      savingsBalance.text("$0");
      }
    }
  });

  $('#depositSavings').on("click", function() {
    savingsBalance.text("$" + (parseInt(savingsBalance.html().replace("$", "")) + parseInt(savingsEntry.val())));
    savingsEntry.val('');
    savingsEntry.focus();
  });

  $('#withdrawSavings').on("click", function() {
    savingsBalance.text("$" + (parseInt(savingsBalance.html().replace("$", "")) - parseInt(savingsEntry.val())));
    savingsEntry.val('');
    savingsEntry.focus();
    if (savingsEntry.val() > parseInt(savingsBalance.html().replace("$", ""))) {
      var difference = savingsEntry.val() - parseInt(savingsBalance.html().replace("$", ""));
      savingsBalance.text("$0");
      if (parseInt(checkingBalance.html().replace("$", "")) > difference) {
        checkingBalance.text("$" + (parseInt(checkingBalance.html().replace("$", "")) - difference));
      } else {
      checkingBalance.text("$0");
      }
    }
  });
});
