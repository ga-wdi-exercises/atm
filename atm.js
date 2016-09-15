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
  deposit('checking', amount);
  $checkingInput.val('');
})

$savingsDeposit.on('click', function(){
  var amount = parseInt($savingsInput.val());
  deposit('savings', amount);
  $savingsInput.val('');
})

$checkingWithdraw.on('click', function(){
  var amount = parseInt($checkingInput.val());
  withdraw('checking', amount);
  $checkingInput.val('');
})

$savingsWithdraw.on('click', function(){
  var amount = parseInt($savingsInput.val());
  withdraw('savings', amount);
  $savingsInput.val('');
})

function deposit(account, amount) {
  if (account == "checking") {
    checkingBalance += amount;
    $checkingBalance.html('$' + checkingBalance);
    return checkingBalance;
  } else if (account == "savings") {
    savingsBalance += amount;
    $savingsBalance.html('$' + savingsBalance);
    $
    return savingsBalance;
  } else {
    throw("Something went wrong with the deposit function. Arguments: " + account + ' ' + amount);
  }
}

function withdraw(account, amount) {
  if (account == "checking") {
    checkingBalance -= amount;
    $checkingBalance.html('$' + checkingBalance);
    return checkingBalance;
  } else if (account == "savings") {
    savingsBalance -= amount;
    $savingsBalance.html('$' + savingsBalance);
    $
    return savingsBalance;
  } else {
    throw("Something went wrong with the withdrawal function. Arguments: " + account + ' ' + amount);
  }
}
