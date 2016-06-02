$(document).ready(function(){
  var checkingAmt = 0;
  var checkingDeposit = $("#checking .input").val();
  $("#checking .deposit").on("click", function() {
    //checkingAmt += amount from input field
    console.log("Checking Deposit Button Clicked");
    checkingAmt = parseInt(checkingAmt);
    checkingDeposit = parseInt(checkingDeposit);
    checkingAmt += checkingDeposit;
    checkingAmt = String(checkingAmt);
    $("#checking .balance").text("$"+checkingAmt);
  });

  var checkingWithdraw = $("#checking .input").val();
  $("#checking .withdraw").on("click", function() {
    console.log("Checking Withdraw Button Clicked");
    checkingAmt = parseInt(checkingAmt);
    checkingWithdraw = parseInt(checkingWithdraw);
    checkingAmt -= checkingWithdraw;
    checkingAmt = String(checkingAmt);
    $("#checking .balance").text("$"+checkingAmt);
  });
});
