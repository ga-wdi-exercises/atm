/* global $ */

$(document).ready(function () {
  //user clicks the deposit button
  $('#checking .deposit').on('click', function () {

    //get deposit input change to number
    depositInputCheck = $('#checking .input').val()
    depositInputCheck = parseInt(depositInputCheck)

    //get current balance, turn from string to number
    checkingBalance = $('#checking .balance').text()
    checkingBalance = parseInt((checkingBalance.slice(1, checkingBalance.length)))
    
    //update balance
    checkingBalance += depositInputCheck
    $('#checking .balance').text('$' + checkingBalance)
  })
})
