$(document).ready(function(){

  // checking account



  //this var is a link to the checking deposit button
  var checkingDepositButton = $("#checking .deposit");

  //if click on checking account deposit button, then
  checkingDepositButton.on("click", checkingGetUserInput);

  //this var links to the input value from user under checking account
  var checkingInputValue = $("#checking .input");

  // this function gets user input for despoit box and inserts it into checking tally
  function checkingGetUserInput() {
    $("#checking .balance").text("$" + checkingInputValue.val());
  }















});
