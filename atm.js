let checkD = $('#checking .deposit');
let checkW = $('#checking .withdraw');
let savingsD = $('#savings .deposit');
let savingsW = $('#savings .withdraw');
let inputCheck = $('#checking .input');
let inputSavings = $('#savings .input');
let checkingBalDiv = $('#checking .balance');
let savingsBalDiv = $('#savings .balance');
let checkingBal = 0;
let savingsBal = 0;


checkD.click(depChecking);
savingsD.click(depSavings);
checkW.click(withdrawChecking);
savingsW.click(withdrawSavings);


function depChecking() {
  checkingBal = addToBalance(checkingBal, parseFloat(inputCheck.val()));
  inputCheck.val("0");
  checkingBalDiv.text(formatBalance(checkingBal));
}

function depSavings() {
  savingsBal = addToBalance(savingsBal, parseFloat(inputSavings.val()));
  inputSavings.val("0");
  savingsBalDiv.text(formatBalance(savingsBal));
}

function withdrawChecking() {
  if (checkingBal - parseFloat(inputCheck.val()) < 0) {
  } else {
    checkingBal = subFromBalance(checkingBal, parseFloat(inputCheck.val()));
    inputCheck.val("0");
    checkingBalDiv.text(formatBalance(checkingBal));
  }
}



function withdrawSavings() {
  if (savingsBal - parseFloat(inputSavings.val()) < 0) {
    // overdraftProtection(savingsBal, checkingBal, parseFloat(inputSavings.val()));
  } else {
    savingsBal = subFromBalance(savingsBal, parseFloat(inputSavings.val()));
    inputSavings.val("0");
    savingsBalDiv.text(formatBalance(savingsBal));
  }
}

function addToBalance(bal, x) {
  return bal += x;
}

function subFromBalance(bal, x) {
  return bal -= x;
}

//Bal1 is the account you are withdrawing from
//Bal2 is your second account
function overdraftProtection(bal1, bal2, withdraw) {
  if (bal1 + bal2 < withdraw) {
    alert('The withdrawal amount, ' + withdraw + ', is greater than both of your accounts.');
  } else {
    subtractFromOtherAccount(bal1, bal2, withdraw);
  }
}

function formatBalance(bal) {
  return '$' + bal.toFixed(2)
}

function subtractFromOtherAccount(bal1, bal2, withdraw) {
  inputSavings.val("0");
  return bal2 + (bal1 - withdraw)
}

$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});
