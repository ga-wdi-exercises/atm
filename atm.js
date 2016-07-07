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

  var accountType;
  var requestAmount = 0;

  var checkingBalance = 0;
  var savingsBalance = 0;

  $(':button').on("click", getAccount);

  function getAccount(){
    var holdThis = $(this);
    accountType = holdThis.parents().eq(0).attr("id");
    if (accountType == 'checking') {
      requestAmount = $('#checking .input').val();
    }
    if (accountType == 'savings') {
      requestAmount = $('#savings .input').val();
    }
    checkTransactionType(this);
  }

  function checkTransactionType(button) {
    if ($(button).attr('value') == 'Deposit') {
      requestAmount *= 1;
    }
     if ($(button).attr('value') == 'Withdraw' ) {
      requestAmount *= -1;
    }
    clearTransaction();
  }

  function clearTransaction() {
    if (accountType == 'checking') {
      checkingBalance += requestAmount;
      $ ('#checking .balanceVal').html(checkingBalance);
    } if (accountType == 'savings') {
      savingsBalance += requestAmount;
      $ ('#savings .balanceVal').html(savingsBalance);
    }
    requestAmount = 0;
    // $('.balance').each().html("");
  }

});
