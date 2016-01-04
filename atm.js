var checkingBalance = 0;
var savingsBalance = 0;

var getUserCheckingInput = function(){
  amount = parseInt( document.querySelector('#checkingAmount').value );
  checkingBalanceDiv = document.querySelector('#checkingBalanceDiv');
  document.querySelector('#checkingAmount').value = '';
  return amount;
}

var getUserSavingsInput = function(){
  amount = parseInt( document.querySelector('#savingsAmount').value );
  savingsBalanceDiv = document.querySelector('#savingsBalanceDiv');
  document.querySelector('#savingsAmount').value = '';
  return amount;
}

var checkingDeposit = function(){  
  checkingBalance += getUserCheckingInput();
  checkingBalanceDiv.innerHTML = "$" + checkingBalance;

  // add class using if/else
  if (checkingBalance == 0) {
    checkingBalanceDiv.classList.add("zero");
  } else {
    checkingBalanceDiv.classList.remove("zero");
  }

  // add class using ternary
  // checkClass = (checkingBalance == 0) ? "balance zero" : "balance"
  // checkingBalanceDiv.className = checkClass

  // (checkingBalance == 0) ? checkingBalanceDiv.className = "balance zero" : checkingBalanceDiv.className = "balance"
}

function checkingWithdrawal(){
  checkingBalance -= getUserCheckingInput();;

  checkingBalanceDiv.innerHTML = "$" + checkingBalance;

  // add class using if/else
  if (checkingBalance == 0) {
    checkingBalanceDiv.classList.add("zero");
  } else {
    checkingBalanceDiv.classList.remove("zero");
  }
}

function savingsDeposit(){
  savingsBalance += getUserSavingsInput();
  savingsBalanceDiv.innerHTML = "$" + savingsBalance;

  // add class using if/else
  if (savingsBalance == 0) {
    savingsBalanceDiv.classList.add("zero");
  } else {
    savingsBalanceDiv.classList.remove("zero");
  }
}

function savingsWithdrawal(){
  savingsBalance -= getUserSavingsInput();;

  savingsBalanceDiv.innerHTML = "$" + savingsBalance;

  // add class using if/else
  if (savingsBalance == 0) {
    savingsBalanceDiv.classList.add("zero");
  } else {
    savingsBalanceDiv.classList.remove("zero");
  }

}

// an eventListener for each button, each one a "click"
document.querySelector('#checkingDepositButton').addEventListener('click', checkingDeposit);
document.querySelector('#checkingWithdrawalButton').addEventListener('click', checkingWithdrawal);
document.querySelector('#savingsDepositButton').addEventListener('click', savingsDeposit);
document.querySelector('#savingsWithdrawalButton').addEventListener('click', savingsWithdrawal);