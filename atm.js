//TODO:
  // [ ] combine event listeners
  // [ ] add a validator
  // [ ] overdraft protection

var bank = {
  checkingBalance: 0,
  savingsBalance: 0,
}

var $checkingBalance = $('#checking .balance');
var $savingsBalance = $('#savings .balance');

var $depositButtons = $('.deposit');
var $withdrawButtons = $('.withdraw');

$depositButtons.on('click', function(){
  var amount = parseInt($(this).siblings('.input').val());
  if ($(this).parent().is("#checking")) {
    deposit("checkingBalance", $checkingBalance, amount);
  } else {
    deposit("savingsBalance", $savingsBalance, amount);
  }
})

$withdrawButtons.on('click', function(){
  var amount = parseInt($(this).siblings('.input').val());
  if ($(this).parent().is("#checking")) {
    withdraw("checkingBalance", $checkingBalance, amount);
  } else {
    withdraw("savingsBalance", $savingsBalance, amount);
  }
})

//DEPOSIT and WITHDRAW functions
function deposit(account, display, amount) {
  bank[account] += amount;
  display.html('$' + bank[account]);
}

function withdraw(account, display, amount) {
  bank[account] -= amount;
  display.html('$' + bank[account]);
}
