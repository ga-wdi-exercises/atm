$(document).ready(function(){
  var checkingAmt = 0;
  checkBalance();
  console.log(4+"5");
  console.log(5+2);
  console.log("1"+9+"3");
  console.log("1"+"3");

  $("#checking .deposit").on("click", function() {
    //checkingAmt += amount from input field
    var checkingDeposit = $("#checking .input").val();
    console.log("Checking Deposit Button Clicked");
    console.log(checkingAmt);
    checkingAmt = parseInt(checkingAmt);
    checkingDeposit = parseInt(checkingDeposit);
    checkingAmt += checkingDeposit;
    checkingAmt = String(checkingAmt);
    $("#checking .balance").text("$"+checkingAmt);
    console.log(checkingAmt);
    checkBalance();
  });

  $("#checking .withdraw").on("click", function() {
    console.log("Checking Withdraw Button Clicked");
    var checkingWithdraw = $("#checking .input").val();
    checkingAmt = parseInt(checkingAmt);
    checkingWithdraw = parseInt(checkingWithdraw);
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
    console.log(checkingAmt);
    checkBalance();
  });
  function checkBalance() {
    // checkingAmt = parseInt(checkingAmt);
    if (checkingAmt == 0) {
      $("#checking .balance").addClass("zero");
    }
    else {
      $("#checking .balance").removeClass("zero");
    }
  }

  var savingsAmt = 0;
  checkSavings();
  $("#savings .deposit").on("click", function() {
    //savingsAmt += amount from input field
    var savingsDeposit = $("#savings .input").val();
    console.log("savings Deposit Button Clicked");
    savingsAmt = parseInt(savingsAmt);
    savingsDeposit = parseInt(savingsDeposit);
    savingsAmt += savingsDeposit;
    savingsAmt = String(savingsAmt);
    $("#savings .balance").text("$"+savingsAmt);
    console.log(savingsAmt);
    checkSavings();
  });

  $("#savings .withdraw").on("click", function() {
    console.log("savings Withdraw Button Clicked");
    var savingsWithdraw = $("#savings .input").val();
    savingsAmt = parseInt(savingsAmt);
    savingsWithdraw = parseInt(savingsWithdraw);
    if (savingsWithdraw > savingsAmt) {
      console.log("Sorry you have do have not enough in your savings account to withdraw that much.");
    }
    else {
      savingsAmt = parseInt(savingsAmt);
      savingsWithdraw = parseInt(savingsWithdraw);
      savingsAmt -= savingsWithdraw;
      savingsAmt = String(savingsAmt);
      $("#savings .balance").text("$"+savingsAmt);
    }
    console.log(savingsAmt);
    checkSavings();
  });
  function checkSavings() {
    // savingsAmt = parseInt(savingsAmt);
    if (savingsAmt == 0) {
      $("#savings .balance").addClass("zero");
    }
    else {
      $("#savings .balance").removeClass("zero");
    }
  }
});
