

var checkingBalance;
var savingsBalance;

function intializeBank(c, s) {
  checkingBalance = c;
  savingsBalance = s;
  $('.checking').html('$' + checkingBalance);
  $('.savings').html('$' + savingsBalance);

}

var getCheckingInput = function() {
  var input = $('#checkInput').val();
  $('#checkInput').val('');
  return input;
};

// note to self: this method is very similar to above. look into passing values to combine
function getSavingsInput() {
  var input = $('#savingsInput').val();
  $('#savingsInput').val('');
  return input;
}

function checkingDeposit() {
  var input = parseInt(getCheckingInput());
  if(savingsBalance < 0) {
    // balance out savings debt before adding to checking
    input += savingsBalance;
    savingsBalance = 0;
    checkingBalance += input;
  }
  else {
    checkingBalance += input;
  }
  displayBalance();
}

function checkingWithdrawal() {
  var input = parseInt(getCheckingInput());
  var combinedBalance = savingsBalance + checkingBalance;

  if(combinedBalance < input) {
    alert('Not enough funds for this action');
  }
  else if(checkingBalance < input) {
    // remove money from savings to cover extra amount needed
    input -= checkingBalance;
    checkingBalance = 0;
    savingsBalance -= input;
  }
  else {
    checkingBalance -= input;
  }
  displayBalance();
}

function savingsDeposit() {
  savingsBalance += parseInt(getSavingsInput());
  displayBalance();
}

function savingsWithdrawal() {
  input = parseInt(getSavingsInput());

  var combinedBalance = savingsBalance + checkingBalance;

  if(combinedBalance < input) {
    alert('Not enough funds for this action');
  }
  else {
    savingsBalance -= input;
  }
  displayBalance();
}

function displayBalance() {
  $('.checking').html('$' + checkingBalance);
  $('.savings').html('$' + savingsBalance);
  overdrawWarning();
}

function overdrawWarning() {
  if(savingsBalance <= 0) {
    $('#sAccount').addClass('zero');
  }
  else {
    $('#sAccount').removeClass('zero');
  }

  if(checkingBalance <= 0)   {
      $('#cAccount').addClass('zero');
    }
    else {
      $('#cAccount').removeClass('zero');
    }
}

// an eventListerner for each button, each one a "click"
$('#checkDeposit').on('click', checkingDeposit);
$('#checkWithdraw').on('click', checkingWithdrawal);
$('#saveDeposit').on('click', savingsDeposit);
$('#saveWithdraw').on('click', savingsWithdrawal);

// start bank
intializeBank(0, 0);
