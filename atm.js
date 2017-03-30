  var checkingDeposit = $('#checking input.deposit');
  var checkingWithdraw = $('#checking input.withdraw');
  var checkingInput = $('#checking input.input')
  var checkingBalance = $('#checking div.balance');


  var savingsWithdraw = $('#savings input.deposit');
  var savingsInput = $('#savings input.input');
  var savingsBalance = $('#savings div.balance');
  var savingsDeposit = $('#savings input.deposit');

var savedChecking = 0;
//creat a variable to store balance

function checkChecking() {
  if(!savedChecking) {
    checkingBalance.addClass('zero');
  }
  else {
    checkingBalance.removeClass('zero');
  }
}
checkChecking();
//check in balance is 0, if yes, make the background-color red.

checkingWithdraw.on('click', handleCheckingWithdraw);
checkingDeposit.on('click', handleCheckingDeposit);
//add event handlers to buttons


function handleCheckingDeposit() {
  let inputNumber = parseInt(checkingInput.val());
  console.log('Hello');
  savedChecking += inputNumber;
  checkingBalance.html('$' + savedChecking);
  checkChecking();
}
function handleCheckingWithdraw() {
  let inputNumber = parseInt(checkingInput.val());
  if(savedChecking < inputNumber) {
    console.log('not enough dough!');
  }
  else {
    savedChecking -= inputNumber
    checkingBalance.html('$' + savedChecking);
    checkChecking();
  }
}

var savedSavings = 0;

function checkSavings() {
  if(!savedSavings) {
    savingsBalance.addClass('zero');
  }
  else {
    savingsBalance.removeClass('zero');
  }
}
checkSavings();

savingsWithdraw.on('click', handleSavingsWithdraw);
savingsDeposit.on('click', handleSavingsDeposit);

function handleSavingsDeposit() {
  console.log('Hello');
  let inputNumber = parseInt(savingsInput.val());
  savedSavings += inputNumber;
  savingsBalance.html('$' + savedSavings);
  checkSavings();
}

function handleSavingsWithdraw() {
  let inputNumber = parseInt(savingsInput.val());
  if(savedSavings < inputNumber) {
    console.log('not enough dough!');
  }
  else {
    savedSavings -= inputNumber
    savingsBalance.html('$' + savedSavings);
    checkSavings();
  }
}
