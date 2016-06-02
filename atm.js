$(document).ready(function(){
  var checkingAmt = 0;
  $("#checking .deposit").on("click", function() {
    //checkingAmt += amount from input field
    var checkingDeposit = $("#checking .input").val();
    console.log("Checking Deposit Button Clicked");
    checkingAmt = parseInt(checkingAmt);
    checkingDeposit = parseInt(checkingDeposit);
    checkingAmt += checkingDeposit;
    checkingAmt = String(checkingAmt);
    $("#checking .balance").text("$"+checkingAmt);
  });

  $("#checking .withdraw").on("click", function() {
    console.log("Checking Withdraw Button Clicked");
    var checkingWithdraw = $("#checking .input").val();
    if (checkingWithdraw > checkingAmt) {
      console.log("Sorry you have do have not enough in your checking account to withdraw that much.");
    }
    else {
      checkingAmt = parseInt(checkingAmt);
      checkingWithdraw = parseInt(checkingWithdraw);
      checkingAmt -= checkingWithdraw;
      checkingAmt = String(checkingAmt);
      $("#checking .balance").text("$"+checkingAmt);
    }
  });
});
