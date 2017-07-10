var depositChecking = $('#checking .deposit') // define variable for checking
var balanceChecking = $('#checking .balance')
var inputChecking = $('#checking .input')
var withdrawChecking = $('#checking .withdraw')

var depositSavings = $('#savings .deposit')  // define variables for savings
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
  withdrawChecking.on('click', function () { // withdraw for checking
    var balance = parseInt(balanceChecking.text().replace('$', ''))
    var withdraw = parseInt(inputChecking.val())
    var total = balance - withdraw
    balanceChecking.text('$' + total)
  })
  depositSavings.on('click', function () {  // deposit for savings
    var balance = parseInt(balanceSavings.text().replace('$', ''))
    var deposit = parseInt(inputSavings.val())
    var total = balance + deposit
    balanceSavings.text('$' + total)
  })
  withdrawSavings.on('click', function () { //withdraw for savings
    var balance = parseInt(balanceSavings.text().replace('$', ''))
    var withdraw = parseInt(inputSavings.val())
    var total = balance - withdraw
    balanceSavings.text('$' + total)
  })
})
