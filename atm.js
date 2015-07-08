$(document).ready(function() {

  acctBal = parseFloat($(".balance").html().replace("$", ""))
  var runningTotal = 0;

  if(runningTotal == 0) {
    $("#sav_bal").addClass("zero")
    $("#check_bal").addClass("zero")
  }

  $("#checking_withdraw").on("click", function() {

    console.log("working!!!");
    cWithdrawAmt = parseFloat($("#checking_input").val())
    if ((runningTotal - cWithdrawAmt) >= 0) {
      runningTotal = runningTotal - cWithdrawAmt;
    }
    $("#check_bal").text("$" + runningTotal);

    if(runningTotal == 0) {
      $("#check_bal").addClass("zero")
    } else {
      $("#check_bal").removeClass("zero")
    }
  })

  $("#checking_deposit").on("click", function() {

    console.log("also working!!!");
    cDepAmt = parseFloat($("#checking_input").val());
    runningTotal = runningTotal + cDepAmt;
    $("#check_bal").text("$" + runningTotal);

    if(runningTotal == 0) {
      $("#check_bal").addClass("zero")
    } else {
      $("#check_bal").removeClass("zero")
    }
  })

  $("#savings_withdraw").on("click", function() {

    console.log("still working!!!");
    sWithdrawAmt = parseFloat($("#savings_input").val());
    if ((runningTotal - cWithdrawAmt) >= 0) {
      runningTotal = runningTotal - sWithdrawAmt;
    }
    $("#sav_bal").text("$" + runningTotal);

    if(runningTotal == 0) {
      $("#sav_bal").addClass("zero")
    } else {
      $("#sav_bal").removeClass("zero")
      }
    })

  $("#savings_deposit").on("click", function() {

    console.log("also still working!!!");
    sDepAmt = parseFloat($("#savings_input").val());
    runningTotal = runningTotal + sDepAmt;
    $("#sav_bal").text("$" + runningTotal);

    if(runningTotal == 0) {
      $("#sav_bal").addClass("zero")
    } else {
      $("#sav_bal").removeClass("zero")
    }
  })
})
