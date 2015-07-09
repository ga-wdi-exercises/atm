$( document ).ready( function(){

var cBal = 0
var sBal = 0

//Checking Account - deposit and withdraw buttons
  //When user enters a value and clicks the deposit button, update account balance
    //User enters value in cUserInput field
    //user clicks cDepositButton - update checkingBalance to reflect user deposit
    //user clicks cWithdrawButton - update checkingBalance to reflect user withdraw

$( "#cDepositButton" ).on("click", function(){
  var cUserInput = parseInt($( "#cUserInput" ).val());
  cBal = cBal + cUserInput;
  $( "#checkingBalance" ).text( "$" + cBal );
})

//Checking account - withdrawButton
$( "#cWithdrawButton" ).on("click", function(){
  var cUserInput = parseInt($( "#cUserInput" ).val());
  cBal = cBal - cUserInput;
  $( "#checkingBalance" ).text( "$" + cBal );
})

//Need functionality for preventing account from getting to negative balance



})
