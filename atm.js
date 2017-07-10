var depositChecking = $('#checking .deposit') // define variable for checking
var balanceChecking = $('#checking .balance')
var inputChecking = $('#checking .input')

var depositSavings = $('#savings .deposit')  //define variables for savings
var balanceSavings = $('#savings .balance')
var inputSavings = $('#savings .input')


$(document).ready(function (balance) { //update balance div for checking account
depositChecking.on('click', function () {
  var balance = parseInt(balanceChecking.text().replace("$", ''))
  var deposit = parseInt(inputChecking.val())
  var total = balance + deposit
  balanceChecking.text('$' + total)
})
depositSavings.on ('click', function() {  //do same for savings account
  var balance = parseInt(balanceSavings.text().replace("$", ''))
  var deposit = parseInt(inputSavings.val())
  var total = balance + deposit
  balanceSavings.text('$' + total)
})
})
