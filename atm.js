var depositChecking = $('#checking .deposit') // define variable for deposit button (checking)
var balanceChecking = $('#checking .balance')
var inputChecking = $('#checking .input')

var depositSavings = $('')
var balanceSavings = $('')
var inputSavings = $('')


$(document).ready(function (balance) { //update balance div for checking account
depositChecking.on('click', function () {
  var balance = parseInt(balanceChecking.text().replace("$", ''))
  var deposit = parseInt(inputChecking.val())
  var total = balance + deposit
  balanceChecking.text('$' + total)
})
depositSavings.on ('click', function() {  //do same for savings account

})
})
