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
  checkingBalDiv.text('$' + checkingBal.toFixed(2));
}

function depSavings() {
  savingsBal = addToBalance(savingsBal, parseFloat(inputSavings.val()));
  inputSavings.val("0");
  savingsBalDiv.text('$' + savingsBal.toFixed(2));
}

function withdrawChecking() {
  if (checkingBal - parseFloat(inputCheck.val()) < 0) {

  } else {
    checkingBal = subFromBalance(checkingBal, parseFloat(inputCheck.val()));
    inputCheck.val("0");
    checkingBalDiv.text('$' + checkingBal.toFixed(2));
  }
}

function withdrawSavings() {
  if (savingsBal - parseFloat(inputCheck.val()) < 0) {

  } else {
    savingsBal = subFromBalance(savingsBal, parseFloat(inputCheck.val()));
    inputCheck.val("0");
    savingsBalDiv.text('$' + savingsBal.toFixed(2));
  }
}

function addToBalance(bal, x) {
  return bal += x;
}

function subFromBalance(bal, x) {
  return bal -= x;
}

$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});
