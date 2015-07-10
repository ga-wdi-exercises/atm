$( document ).ready( function(){

var cBal = 0
var sBal = 0

//Had issues making this work
// $("div.zero").css({
//       "background-color": "000000",
//     });

//Checking Account - deposit and withdraw buttons
  //When user enters a value and clicks the deposit button, update account balance
    //User enters value in cUserInput field
    //user clicks cDepositButton - update checkingBalance to reflect user deposit
    //user clicks cWithdrawButton - update checkingBalance to reflect user withdraw
    //if userinput withdraw makes checkingBalance go below zero, do not allow

//Checking Account Deposit
    $( "#cDepositButton" ).on("click", function(){
      var cDepositUserInput = parseInt($( "#cUserInput" ).val());
      cBal = cBal + cDepositUserInput;
      $( "#checkingBalance" ).text( "$" + cBal );
    })

//Checking Account Withdraw
$( "#cWithdrawButton" ).on("click", function(){
  var cWithdrawUserInput = parseInt($( "#cUserInput" ).val());
  if(cBal >= cWithdrawUserInput) {
  cBal = cBal - cWithdrawUserInput;
    $( "#checkingBalance" ).text( "$" + cBal );
  }
  else if(cBal < cWithdrawUserInput) {
    var answer = confirm("Insufficient Funds!")
  }
})

//Savings Account - deposit and withdraw buttons
  //When user enters a value and clicks the deposit button, update account balance
    //User enters value in sUserInput field
    //user clicks sDepositButton - update savingsBalance to reflect user deposit
    //user clicks sWithdrawButton - update savingsBalance to reflect user withdraw

//Savings Account Deposit
$( "#sDepositButton" ).on("click", function(){
  var sUserInput = parseInt($( "#sUserInput" ).val());
  sBal = sBal + sUserInput;
  $( "#savingsBalance" ).text( "$" + sBal );
})

//Savings Account Withdraw
$( "#sWithdrawButton" ).on("click", function(){
  var sWithdrawUserInput = parseInt($( "#sUserInput" ).val());
  if(sBal >= sWithdrawUserInput) {
  sBal = sBal - sWithdrawUserInput;
  $( "#savingsBalance" ).text( "$" + sBal );
}
  else if(sBal < sWithdrawUserInput) {
    var answer = confirm("Insufficient Funds!")
  }
})

})
