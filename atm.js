$(document).ready(function(){

  // checking account

  //this var is a link to the checking deposit button
  var checkingDepositButton = $("#checking .deposit");

  // the value of total checking balance
  var checkingAccountTotal = 0;


  //this var links to the input value from user under checking account

  //if click on checking account deposit button, then inserts into checking balance
  checkingDepositButton.on("click", function(){
    var checkingInputValue = $("#checking .input");
    var numCheckingInputValue = parseInt(checkingInputValue.val());
    checkingAccountTotal = parseInt(checkingAccountTotal);
    checkingAccountTotal = checkingAccountTotal + numCheckingInputValue;
    checkingAccountTotal = String(checkingAccountTotal);
    $("#checking .balance").html("$" + checkingAccountTotal);
  });

















});
