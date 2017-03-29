var checkingDeposit = $('#checking input.deposit');
  var checkingWithdraw = $('#checking input.withdraw');
  var checkingInput = $('#checking input.input')
  var savingsDeposit = $('#savings input.deposit');
    var savingsWithdraw = $('#savings input.deposit');
    var checkingBalance = $('#checking div.balance');
    var savingsInput = $('#savings input.input');


var savedChecking = 0;

checkingWithdraw.on('click', handleWithdraw)
checkingDeposit.on('click', handleDeposit);

function handleDeposit() {
  let inputNumber = parseInt(checkingInput.val());
  console.log('Hello');
  savedChecking += inputNumber;
  checkingBalance.html('$' + savedChecking);
}

function handleWithdraw() {
  let inputNumber = parseInt(checkingInput.val());
  if(savedChecking < inputNumber) {
    console.log('not enough dough!');
  }
  else {
    savedChecking -= inputNumber
    checkingBalance.html('$' + savedChecking);
  }
}
