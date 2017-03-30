//select jquery elements
var checkingDeposit = $('#checking input.deposit');
var checkingWithdraw = $('#checking input.withdraw');
var checkingInput = $('#checking input.input')
var checkingBalance = $('#checking div.balance');

var savingsWithdraw = $('#savings input.withdraw');
var savingsInput = $('#savings input.input');
var savingsBalance = $('#savings div.balance');
var savingsDeposit = $('#savings input.deposit');


//creat a variables to store balances and update display
savedChecking = 0;
checkingBalance.html('$' + savedChecking);
savedSavings = 100;
savingsBalance.html('$' + savedSavings);

//functions to turn either account red if balance is 0
function checkChecking() {
  if(!savedChecking) {
    checkingBalance.addClass('zero');
  }
  else {
    checkingBalance.removeClass('zero');
  }
}
checkChecking();

function checkSavings() {
  if(!savedSavings) {
    savingsBalance.addClass('zero');
  }
  else {
    savingsBalance.removeClass('zero');
  }
}
checkSavings();

//add event handlers to checking buttons
checkingWithdraw.on('click', handleCheckingWithdraw);
checkingDeposit.on('click', handleCheckingDeposit);

//
function handleCheckingDeposit() {
  let inputNumber = parseInt(checkingInput.val());
  console.log('Hello');
  savedChecking += inputNumber;
  checkingBalance.html('$' + savedChecking);
  checkChecking();
}

function handleCheckingWithdraw() {
  let inputNumber = parseInt(checkingInput.val());
  if (inputNumber <= savedChecking) {
    savedChecking -= inputNumber
    checkingBalance.html('$' + savedChecking);
    checkChecking();
  }
//if checking can't cover withdraw, take from savings.
  else if (savedChecking < inputNumber && savedSavings > inputNumber) {
    savedSavings -= (inputNumber - savedChecking);
    savingsBalance.html('$' + savedSavings);
    checkingBalance.html('$' + 0);
    checkChecking();
    checkSavings();
  }
  else {
    console.log('NOT ENOUGH MONEY FOOL')
    checkChecking();
  }
}
//add event listeners to savings buttons
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
    savedSavings = 0;
    savingsBalance.html('$' + savedSavings);
    console.log('All tapped out!');
  }
  else {
    savedSavings -= inputNumber
    savingsBalance.html('$' + savedSavings);
    checkSavings();
  }
}
