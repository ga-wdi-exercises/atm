/* global $ */

$(document).ready(function () {
  // Checking Deposit
  // user clicks the deposit button
  $('#checking .deposit').on('click', function () {
    // get deposit input change from string to number
    depositChecking = $('#checking .input').val()
    depositChecking = parseInt(depositChecking)

    // get current balance, turn from string to number
    checkingBalance = $('#checking .balance').text()
    checkingBalance = parseInt((checkingBalance.slice(1, checkingBalance.length)))

    // update balance
    checkingBalance += depositChecking
    $('#checking .balance').text('$' + checkingBalance)
  })

  // Checking Withdraw
  // user clicks the withraw button
  $('#checking .withdraw').on('click', function () {
    // get withdraw input and change from string to number
    withdrawChecking = $('#checking .input').val()
    withdrawChecking = parseInt(withdrawChecking)

    // get current balance, turn from string to number
    checkingBalance = $('#checking .balance').text()
    checkingBalance = parseInt((checkingBalance.slice(1, checkingBalance.length)))

    // update balance
    checkingBalance -= withdrawChecking
    $('#checking .balance').text('$' + checkingBalance)
  })
})
