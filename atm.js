/* global $ */

$(document).ready(function () {
  $('#checking .deposit').on('click', function () {
    depositInputCheck = $('#checking .input').val()
    checkingBalance = $('#checking .balance').text()
    checkingBalance = parseInt((checkingBalance.slice(1, checkingBalance.length)))
    $('#checking .balance').text('$' + depositInputCheck)
    console.log(checkingBalance)
  })
})
