//To Do:
  // refactor deposit/withdraw functions so I don't need both if statements
  // combine deposit and withdraw functions?
  // add a validator
  // overdraft protection

var checkingBalance = 0;
var $checkingBalance = $('#checking .balance');
var savingsBalance = 0;
var $savingsBalance = $('#savings .balance');

var $checkingInput = $('#checking > .input');
var $checkingDeposit = $('#checking > .deposit');
var $checkingWithdraw = $('#checking > .withdraw');

var $savingsInput = $('#savings .input');
var $savingsDeposit = $('#savings > .deposit');
var $savingsWithdraw = $('#savings > .withdraw');



$checkingDeposit.on('click', function(){
  var amount = parseInt($checkingInput.val());
  deposit(checkingBalance, $checkingBalance, amount);
  $checkingInput.val('');
})

$savingsDeposit.on('click', function(){
  var amount = parseInt($savingsInput.val());
  deposit(savingsBalance, $savingsBalance, amount);
  $savingsInput.val('');
})

$checkingWithdraw.on('click', function(){
  var amount = parseInt($checkingInput.val());
  withdraw(checkingBalance, $checkingBalance, amount);
  $checkingInput.val('');
})

$savingsWithdraw.on('click', function(){
  var amount = parseInt($savingsInput.val());
  withdraw(savingsBalance, $savingsBalance, amount);
  $savingsInput.val('');
})

function deposit(account, display, amount) {
  account += amount;
  display.html('$' + account);
  return account;
}

function withdraw(account, display, amount) {
  account -= amount;
  display.html('$' + account);
  return account;
}
