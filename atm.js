$(document).ready(function(){

});

var totalAmtChk = 0;
// Checking Account's deposit button listen to click
function depMoneyChk() {
  // amt of checking deposit
  var inputValue1 = $('#checking>.input').val();
  //adding user input to the current balance
  totalAmtChk = +inputValue1 + +totalAmtChk;
  // changing balance to amt of deposit
  $('#checking>.balance').text('$'+totalAmtChk);
}

$('#checking>.deposit').on('click',depMoneyChk)

// Checking Account's withdrawal button listen to click
function widrMoneyChk() {
  // amt of checking withdrawal
  var inputValue1 = $('#checking>.input').val();
  //adding user input to the current balance
  totalAmtChk = +totalAmtChk - +inputValue1 ;
  // changing balance to amt of withdrawal
  $('#checking>.balance').text('$'+totalAmtChk);
}

$('#checking>.withdraw').on('click',widrMoneyChk)

// SAVINGS ACCOUNT
var totalAmtSav =0;
function depMoneySav() {
  // amt of savings deposit
  var inputValue2 = $('#savings>.input').val();
  //adding user input to the current balance
  totalAmtSav = +inputValue2 + +totalAmtSav;
  // changing balance to amt of deposit
  $('#savings>.balance').text('$'+totalAmtSav);
}

$('#savings>.deposit').on('click',depMoneySav)

// Checking Account's withdrawal button listen to click
function widrMoneySav() {
  // amt of checking deposit
  var inputValue2 = $('#savings>.input').val();
  //adding user input to the current balance
  totalAmtSav = +totalAmtSav - +inputValue2;
  // changing balance to amt of deposit
  $('#savings>.balance').text('$'+totalAmtSav);
}

$('#savings>.withdraw').on('click',widrMoneySav)


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
