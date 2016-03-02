

var checkingBalance = parseInt($('.checking').html());
var savingsBalance = parseInt($('.savings').html());

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
  checkingBalance -= parseInt(getCheckingInput());
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
