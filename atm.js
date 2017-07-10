var depositChecking = $('#checking .deposit') // define variable for deposit button (checking)
var balanceChecking = $('#checking .balance')
var inputChecking = $('#checking .input')
var withdrawChecking = $('#checking .withdraw')
var depositSavings = $('#savings .deposit') // define variable for deposit button (checking)
var balanceSavings = $('#savings .balance')
var inputSavings = $('#savings .input')
var withdrawSavings = $('#savings .withdraw')
$(document).ready(function (balance) { // update balance div for checking account
  depositChecking.on('click', function () {
    var balance = parseInt(balanceChecking.text().replace('$', ''))
    var deposit = parseInt(inputChecking.val())
    var total = balance + deposit
    balanceChecking.text('$' + total)
  })

  withdrawChecking.on('click', function () {
    var balance = parseInt(balanceChecking.text().replace('$', ''))
    var withdraw = parseInt(inputChecking.val())
    var total = balance - withdraw
    balanceChecking.text('$' + total)
  })
})
