// start with checking account
// user inputs money into amount line
// when balance is 0, make background red
//  when not 0, make green
// user can then click deposit or withdraw button
// if deposit button clicked
// add amount to current balance
// if withdraw is clicked
// check to see that withdraw amount is less than account balance
// if less than deduct amount from account balance
// if greater than deny transaction
// same logic for savings account
checkingBalance = 0;
savingsBalance = 0;
checkingDeposit = $('#checking').find('.deposit');
savingsDeposit = $('#savings').find('.deposit');
checkingWithdraw = $('#checking').find('.withdraw');
savingsWithdraw = $('#savings').find('.withdraw');
checkingInput = $('#checking').find('.input');
savingsInput = $('#savings').find('.input');
// creating variables for checking and savings so that it
// is not called multiple times

// Checking
function showCheckingDepositBalance() {
  checkingBalance += parseInt($('#checking .input').val());
  // pulling the current balance value that was inputted
  $("#checking .balance").html('$' + checkingBalance);
  red();
  clear();
  // updating the HTML text to show current balance
  // console.log(checkingBalance);
}

function showCheckingWithdrawBalance() {
  if (checkingBalance < parseInt($('#checking .input').val())) {
    // alert("Not enough funds for withdraw");
    overdraft();
  }
  else {
    checkingBalance -= parseInt($('#checking .input').val());
    $("#checking .balance").html('$' + checkingBalance);
    red();
  }
  clear();
}

// Savings
function showSavingsDepositBalance() {
  savingsBalance += parseInt($('#savings .input').val());
  // pulling the current balance value that was inputted
  $("#savings .balance").html('$' + savingsBalance);
  red();
  clear();
  // updating the HTML text to show current balance
}

function showSavingsWithdrawBalance() {
  if (savingsBalance < parseInt($('#savings .input').val())) {
    alert("Not enough funds for withdraw");
  }
  else {
    savingsBalance -= parseInt($('#savings .input').val());
    $("#savings .balance").html('$' + savingsBalance);
    red();
  }
  clear();
}

function red() {
  //setting up the red warning for 0 balance
  if (checkingBalance === 0) {
    $('#checking .balance').addClass('zero');
  }
  else {
    $('#checking .balance').removeClass('zero');
  }
  if (savingsBalance === 0) {
    $('#savings .balance').addClass('zero');
  }
  else {
    $('#savings .balance').removeClass('zero');
  }
}
red();

function overdraft() {
  checkingBalance = parseInt($('#checking .input').val()) - checkingBalance;
  // $("#checking .balance").html('$0');
  // red();
  if (checkingBalance <= savingsBalance) {
    $("#checking .balance").html('$0');
    $('#checking .balance').addClass('zero');
    savingsBalance -= checkingBalance;
    $("#savings .balance").html('$' + savingsBalance);
    if (savingsBalance == 0) {
      $('#savings .balance').addClass('zero');
    }
  }
  else if (checkingBalance > savingsBalance) {
    alert("ERROR: Insufficient Funds");
  }
}

function clear() {
  $('.input').val('');
}

checkingDeposit.on('click', showCheckingDepositBalance);
savingsDeposit.on('click', showSavingsDepositBalance);
checkingWithdraw.on('click', showCheckingWithdrawBalance);
savingsWithdraw.on('click', showSavingsWithdrawBalance);
