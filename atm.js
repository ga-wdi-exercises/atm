/* global $ */

var depositChecking = $('#checking .deposit')
var balanceChecking = $('#checking .balance')
var inputChecking = $('#checking .input')
var withdrawChecking = $('#checking .withdraw')
var depositSavings = $('#savings .deposit')
var balanceSavings = $('#savings .balance')
var inputSavings = $('#savings .input')
var withdrawSavings = $('#savings .withdraw')
$(document).ready(function (balance) {
  depositChecking.on('click', function () {
    var balance = parseInt(balanceChecking.text().replace('$', ''))
    var deposit = parseInt(inputChecking.val())
    var total = balance + deposit
    balanceChecking.text('$' + total)
  })

  depositSavings.on('click', function () {
    var balance = parseInt(balanceSavings.text().replace('$', ''))
    var deposit = parseInt(inputSavings.val())
    var total = balance + deposit
    balanceSavings.text('$' + total)
  })

  withdrawChecking.on('click', function () {
    var balance = parseInt(balanceChecking.text().replace('$', ''))
    var withdraw = parseInt(inputChecking.val())
    var total = balance - withdraw

    if (total < 0) {
      balanceChecking.addClass('zero')
      throw 'Insufficient funds'
    } else { balanceChecking.text('$' + total) }
  })
  withdrawSavings.on('click', function () {
    var balance = parseInt(balanceSavings.text().replace('$', ''))
    var withdraw = parseInt(inputSavings.val())
    var total = balance - withdraw

    if (total < 0) {
      balanceSavings.addClass('zero')
      throw 'Insufficient funds'
    } else { balanceSavings.text('$' + total) }
  })
})
