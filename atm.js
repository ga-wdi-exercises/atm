// setting up some global variables
var checkingBalance = 0;
var $checkingBalance = $('#checking .balance');
var savingsBalance = 0;
var $savingsBalance = $('#savings .balance');

var $depChecking = $('#checking > .deposit');
var $inputChecking = $('#checking > .input');


$depChecking.on('click', function(){
  var deposit = parseInt($inputChecking.val());
  checkingBalance += "deposit";

  console.log("Deposit clicked. Value = " + deposit);
})


function deposit(account, amount) {
  if (account == "checking") {
    checkingBalance += amount;
    $checkingBalance.html('$' + checkingBalance);
    return checkingBalance;
  } else if (account == "savings") {
    savingsBalance += amount;
    $savingsBalance.html('$' + savingsBalance);
    return savingsBalance;
  } else {
    throw("Something went wrong with the deposit function. Arguments: " + account + ' ' + amount);
  }
}
