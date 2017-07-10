var depositChecking = $('#checking .deposit') // define variable for deposit button (checking)
var balanceChecking = $('#checking .balance')
var inputChecking = $('#checking .input')
var withdrawChecking = $('#checking .withdraw') // define variable for deposit button (checking)

var depositSavings = $('#savings .deposit') // define variable for deposit button (checking)
var balanceSavings = $('#savings .balance')
var inputSavings = $('#savings .input')
var withdrawSavings = $('#savings .withdraw')

$(document).ready(function (balance) { //update balance div for checking account
depositChecking.on('click', function () {
  var balance = parseInt(balanceChecking.text().replace("$", ''))
  var deposit = parseInt(inputChecking.val())
  var total = balance + deposit
  balanceChecking.text('$' + total)
})

withdrawChecking.on('click', function () {
    var balance = parseInt(balanceChecking.text().replace("$", ''))
    var withdraw = parseInt(inputChecking.val())
    var total = balance - withdraw
    balanceChecking.text('$' + total)

    if (total >= 0) {
    balanceChecking.text('$' + total)
    balanceChecking.addClass('zero')
  }
})


//update balance div for checking account
depositSavings.on('click', function () {
  var balance = parseInt(balanceSavings.text().replace("$", ''))
  var deposit = parseInt(inputSavings.val())
  var total = balance + deposit
  balanceSavings.text('$' + total)
})
withdrawSavings.on('click', function () {
    var balance = parseInt(balanceSavings.text().replace("$", ''))
    var withdraw = parseInt(inputSavings.val())
    var total = balance - withdraw
    balanceSavings.text('$' + total)

    if (total >= 0) {
    balanceSavings.text('$' + total)
    balanceSavings.addClass('zero')
  }
})
})
