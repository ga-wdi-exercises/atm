$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

var checkingBalance = 0
var checkingDepositButton = $('#checking .deposit') //button
var checkingWithdrawButton = $('#checking .withdraw')
var checkingInput = $('#checking .input') //user inputs
var checkingDisplay = $('#checking .balance')

var savingsBalance = 0
var savingsDepositButton = $('#savings .deposit')
var savingsWithdrawButton = $('#savings .withdraw')
var savingsInput = $('#savings .input')
var savingsDisplay = $('#savings .balance')

function depositToChecking () {
  var amount = parseInt(checkingInput.val())
  checkingBalance += amount
  checkingDisplay.text(checkingBalance)
}

function withdrawFromChecking () {
  var amount = parseInt(checkingInput.val())
  checkingBalance -= amount
  checkingDisplay.text(checkingBalance)
}

function depositToSavings () {
  var amount = parseInt(savingsInput.val())
  savingsBalance += amount
  savingsDisplay.text(savingsBalance)
}

function withdrawFromSavings () {
  var amount = parseInt(savingsInput.val())
  savingsBalance -= amount
  savingsDisplay.text(savingsBalance)
}

checkingDepositButton.on('click', function () {
  depositToChecking()
})
checkingWithdrawButton.on('click', function () {
  withdrawFromChecking()
})
savingsDepositButton.on('click', function () {
  depositToSavings()
})
savingsWithdrawButton.on('click', function () {
  withdrawFromSavings()
})
