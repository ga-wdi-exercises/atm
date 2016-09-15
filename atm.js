// setting up some global variables
var checkingBalance = 0;
var $checkingBalance = $('#checking .balance');
var savingsBalance = 0;
var $savingsBalance = $('#savings .balance');

var $checkingDeposit = $('#checking > .deposit');
var $checkingInput = $('#checking > .input');

var $savingsDeposit = $('#savings > .deposit');
var $savingsInput = $('#savings .input');


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
