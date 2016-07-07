//   make sure document is ready
//   make sure inputs are ready
// checking: input, deposit, withdraw
// savings: input, deposit, withdraw
//   get/display checking balance
//   get/display savings balance
//
// for the checking account:
//   make sure input field is clear and ready for user input
//   get and store value from input field
//     make sure input is float w/ two decimals
//   add input to balance and set if user clicks "deposit"
//   subtract and set if user clicks "withdraw"
//     if withdrawal request is greater than available balance, don't withdraw
//   if the account balance is now 0, change the background to red
//   after the transaction is complete, clear the input field, display the new balance and await user input

// for the savings account:
//   make sure input field is clear and ready for user input
//   get and store value from input field
//     make sure input is float w/ two decimals
//   add input to balance and set if user clicks "deposit"
//   subtract and set if user clicks "withdraw"
//     if withdrawal request is greater than available balance, don't withdraw
//   if the account balance is now 0, change the background to red
//   after the transaction is complete, clear the input field, display the new balance and await user input

// BONUS:
// if checking account balance is less than withdrawal request...
//   get sum of both account balances
//   if the sum of both account balances is greater than withdrawal request...
//     withdraw all money from checking and (withdrawal - checking balance) from savings
// ... and vice versa


$(document).ready(function(){

  // var checkingAccount = $('#checking');
  // console.log(checkingAccount);

  // $ ('#checking .balanceVal').html(15)
  var checkingBalance = Math.round( parseFloat($ ('#checking .balanceVal').html() ) * 100 ) / 100;
  // console.log(checkingBalance);
  // console.log(typeof(checkingBalance));
  $('#checking .balanceVal').html(checkingBalance);

  // $ ('#savings .balanceVal').html(19.2323523)
  var savingsBalance = Math.round( parseFloat($ ('#savings .balanceVal').html() ) * 100 ) / 100;
  // console.log(savingsBalance);
  // console.log(typeof(savingsBalance));
  $('#savings .balanceVal').html(savingsBalance);

  // will hold the user input
  var requestAmount = 15;

  $(':button').on("click", checkWhichAccount);



  function checkWhichAccount(clicked) {
    // var temp = this;
    // account = $(temp).parents()
    // console.log(account);
    if (clicked == $('.deposit:first')) {
      console.log('hey broh');
    }

    checkTransactionType(this);
  }

  function checkTransactionType(button) {
    if ($(button).attr('value') == 'Deposit' ) {
      requestAmount *= 1;
      console.log(requestAmount);
    } if ($(button).attr('value') == 'Withdraw' ) {
      requestAmount *= -1
      console.log(requestAmount);
    }
  }

});
