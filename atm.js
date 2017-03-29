let body = $('body');
let checkD = $('#checking .deposit');
let checkW = $('#checking .withdraw');
let savingsD = $('#savings .deposit');
let savingsW = $('#savings .withdraw');
let inputCheck = $('#checking input');
let inputSavings = $('#savings input');
let checkingBal = 0;
let savingsBal = 0;


checkD.click(getInput);

function getInput() {
  console.log(checkingBal += parseFloat(inputCheck.val()));
  return addToBalance(checkingBal, parseFloat(inputCheck.val()));
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
