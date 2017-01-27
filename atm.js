$(document).ready(function(){

});

var totalAmt = 0;
// Checking Account's deposit button listen to click
function depMoneyChk() {
  // amt of checking deposit
  var inputValue1 = $('#checking>.input').val();
  //adding user input to the current balance
  totalAmt = +inputValue1 + +totalAmt;
  // changing balance to amt of deposit
  $('#checking>.balance').text('$'+totalAmt);
}

$('#checking>.deposit').on('click',depMoneyChk)

// Checking Account's withdrawal button listen to click
function widrMoneyChk() {
  // amt of checking deposit
  var inputValue1 = $('#checking>.input').val();
  //adding user input to the current balance
  totalAmt = +inputValue1 - +totalAmt;
  // changing balance to amt of deposit
  $('#checking>.balance').text('$'+totalAmt);
}

$('#checking>.withdraw').on('click',widrMoneyChk)



//
// pseudocode for ATM
//CHECKING:
// deposit:
// // input dollar amount --> to deposit
//   //  add click listener to checking's deposit button
      //      to go to
//     //  function should add to the current balance
          // add the inputted text balance to the current balance.
//
//
//
//
// withdrawal:
//   //  add click listener to checking's deposit button
      //      to go to
//     //  function should subtract from the current balance
          // subtract the inputted text balance from the current balance.
//



// if withdraw too much, alert will tell you that there is too much.

// if the account balance in saving is higher withdraw from the other account too.


// repeat same code for SAVINGS
