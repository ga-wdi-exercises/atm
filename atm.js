

var checkingBalance;
var savingsBalance;

function intializeBank(c, s) {
  checkingBalance = c;
  savingsBalance = s;
  displayBalance();
}

var getCheckingInput = function() {
  var input = $('#checkInput').val();
  $('#checkInput').val('');
  return input;
};

// note to self: this method is very similar to above. look into passing values to combine
var getSavingsInput = function() {
  var input = $('#savingsInput').val();
  $('#savingsInput').val('');
  return input;
};

var checkingDeposit = function(){
  checkingBalance += parseInt(getCheckingInput());
  displayBalance();
};

function checkingWithdrawal(){
  var input = parseInt(getCheckingInput());
  if(checkingBalance < input)
  {
    input -= checkingBalance;
    checkingBalance = 0;
    savingsBalance -= input;
  }
  else {
    checkingBalance -= input;
  }

  displayBalance();

}

function savingsDeposit(){
  savingsBalance += parseInt(getSavingsInput());
  displayBalance();
}

function savingsWithdrawal(){
  savingsBalance -= parseInt(getSavingsInput());
  displayBalance();
}

function displayBalance() {
  $('.checking').html('$' + checkingBalance);
  $('.savings').html('$' + savingsBalance);
}

// an eventListerner for each button, each one a "click"
$('#checkDeposit').on('click', checkingDeposit);
$('#checkWithdraw').on('click', checkingWithdrawal);
$('#saveDeposit').on('click', savingsDeposit);
$('#saveWithdraw').on('click', savingsWithdrawal);

// start bank
intializeBank(0, 0);
