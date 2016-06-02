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

  $("#checking .withdraw").on("click", function() {
    console.log("Checking Withdraw Button Clicked");
    var checkingWithdraw = $("#checking .input").val();
    checkingAmt = parseInt(checkingAmt);
    checkingWithdraw = parseInt(checkingWithdraw);
    savingsAmt = parseInt(savingsAmt);

    if (checkingWithdraw > checkingAmt) {
        console.log("overPro launched!");
        var allTheMonies = savingsAmt+checkingAmt;
          if (checkingWithdraw > allTheMonies) {
          console.log("You're withdrawing more money than is in both of your accounts");
          }
          else if (checkingWithdraw > checkingAmt && checkingWithdraw < allTheMonies) {
            debugger;
            var overAmt = checkingAmt-checkingWithdraw;
            overAmt = Math.abs(overAmt);
            checkingAmt = 0;
            savingsAmt -= overAmt;
            $("#savings .balance").text("$"+savingsAmt);
            $("#checking .balance").text("$"+checkingAmt);
        }
      }
    else {
      checkingAmt = parseInt(checkingAmt);
      checkingWithdraw = parseInt(checkingWithdraw);
      checkingAmt -= checkingWithdraw;
      checkingAmt = String(checkingAmt);
      $("#checking .balance").text("$"+checkingAmt);
    }
    verifyBalance();
  });

  function verifyBalance() {
    if (checkingAmt == 0) {
      $("#checking .balance").addClass("zero");
    }
    else {
      $("#checking .balance").removeClass("zero");
    }
  }

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

  $("#savings .withdraw").on("click", function() {
    console.log("savings Withdraw Button Clicked");
    var savingsWithdraw = $("#savings .input").val();
    savingsAmt = parseInt(savingsAmt);
    savingsWithdraw = parseInt(savingsWithdraw);

    if (savingsWithdraw > savingsAmt) {
        console.log("overPro launched!");

        allTheMonies = savingsAmt+checkingAmt;
        if (savingsWithdraw > allTheMonies) {;
        console.log("You're withdrawing more money than is in both of your accounts");
        }

        else if (savingsWithdraw > savingsAmt && savingsWithdraw < allTheMonies) {
          var overAmt = savingsAmt-savingsWithdraw;
          console.log(overAmt);
          overAmt = Math.abs(overAmt);
          console.log(overAmt);
          savingsAmt = 0;
          checkingAmt -= overAmt;
          console.log(checkingAmt);
          $("#savings .balance").text("$"+savingsAmt);
          $("#checking .balance").text("$"+checkingAmt);
        }
      }

    else {
      savingsAmt = parseInt(savingsAmt);
      savingsWithdraw = parseInt(savingsWithdraw);
      savingsAmt -= savingsWithdraw;
      savingsAmt = String(savingsAmt);
      $("#savings .balance").text("$"+savingsAmt);
    }
    checkSavings();
  });
  function checkSavings() {
    if (savingsAmt == 0) {
      $("#savings .balance").addClass("zero");
    }
    else {
      $("#savings .balance").removeClass("zero");
    }
  }

  // checkingAmt = parseInt(checkingAmt);
  // savingsAmt = parseInt(savingsAmt);
  // var allTheMonies = checkingAmt+savingsAmt;
  // console.log(allTheMonies);

  function overPro() {
    console.log("overPro launched!");
    if (savingsWithdraw > allTheMonies || checkingWithdraw > allTheMonies) {
      console.log("You're withdrawing more money than is in both of your accounts");
    }
    else if (savingsWithdraw > savingsAmt && savingsWithdraw < allTheMonies) {
      var overAmt = savingsAmt-savingsWithdraw;
      console.log(overAmt);
      overAmt = Math.abs(overAmt);
      console.log(overAmt);
      savingsAmt -= overAmt;
      console.log(savingsAmt);
    }
  }
});
