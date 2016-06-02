var checkingAmt = 0;
var savingsAmt = 0;

$(document).ready(function() {
  verifyBalance();
  $("#checking .deposit").on("click", function() {
    var checkingDeposit = $("#checking .input").val();
    console.log("Checking Deposit Button Clicked");
    checkingAmt = parseInt(checkingAmt);
    checkingDeposit = parseInt(checkingDeposit);
    checkingAmt += checkingDeposit;
    $("#checking .balance").text("$"+checkingAmt);
    verifyBalance();
  });
  
  checkSavings();
  $("#savings .deposit").on("click", function() {
    var savingsDeposit = $("#savings .input").val();
    console.log("savings Deposit Button Clicked");
    savingsAmt = parseInt(savingsAmt);
    savingsDeposit = parseInt(savingsDeposit);
    savingsAmt += savingsDeposit;
    savingsAmt = String(savingsAmt);
    $("#savings .balance").text("$"+savingsAmt);
    checkSavings();
  });

  function checkSavings() {
    if (savingsAmt == 0) {
      $("#savings .balance").addClass("zero");
    }
    else {
      $("#savings .balance").removeClass("zero");
    }
  }});
