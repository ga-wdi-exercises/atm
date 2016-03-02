function Bank(c, s) {
  this.checkingBalance = c;
  this.savingsBalance = s;
  $('.checking').html('$' + this.checkingBalance);
  $('.savings').html('$' + this.savingsBalance);
}

Bank.prototype.getCheckingInput = function () {
  var input = $('#checkInput').val();
  $('#checkInput').val('');
  return input;
};

Bank.prototype.getSavingsInput = function () {
  var input = $('#savingsInput').val();
  $('#savingsInput').val('');
  return input;
};

Bank.prototype.displayBalance = function () {
  $('.checking').html('$' + this.checkingBalance);
  $('.savings').html('$' + this.savingsBalance);
  this.overdrawWarning();
};

Bank.prototype.overdrawWarning = function () {
  if(this.savingsBalance <= 0) {
    $('#sAccount').addClass('zero');
  }
  else {
    $('#sAccount').removeClass('zero');
  }

  if(this.checkingBalance <= 0) {
      $('#cAccount').addClass('zero');
    }
    else {
      $('#cAccount').removeClass('zero');
    }
};

Bank.prototype.checkDeposit = function () {
  var input = parseInt(this.getCheckingInput());
  if(this.savingsBalance < 0) {
    // balance out savings debt before adding to checking
    input += this.savingsBalance;
    this.savingsBalance = 0;
    this.checkingBalance += input;
  }
  else {
    this.checkingBalance += input;
  }
  this.displayBalance();
};

Bank.prototype.checkingWithdrawal = function () {
  var input = parseInt(this.getCheckingInput());
  var combinedBalance = this.savingsBalance + this.checkingBalance;

  if(combinedBalance < input) {
    alert('Not enough funds for this action');
  }
  else if(this.checkingBalance < input) {
    // remove money from savings to cover extra amount needed
    input -= this.checkingBalance;
    this.checkingBalance = 0;
    this.savingsBalance -= input;
  }
  else {
    this.checkingBalance -= input;
  }
  this.displayBalance();
};

Bank.prototype.savingsDeposit = function () {
  this.savingsBalance += parseInt(this.getSavingsInput());
  this.displayBalance();
};

Bank.prototype.savingsWithdrawal = function () {
  input = parseInt(this.getSavingsInput());

  var combinedBalance = this.savingsBalance + this.checkingBalance;

  if(combinedBalance < input) {
    alert('Not enough funds for this action');
  }
  else {
    this.savingsBalance -= input;
  }
  this.displayBalance();
};

// init Bank
var atm = new Bank(0,0);

// // an eventListerner for each button, each one a "click"
$('#checkDeposit').on('click', atm.checkingDeposit);
$('#checkWithdraw').on('click', atm.checkingWithdrawal);
$('#saveDeposit').on('click', atm.savingsDeposit);
$('#saveWithdraw').on('click', atm.savingsWithdrawal);
