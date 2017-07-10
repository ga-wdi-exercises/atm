/* global $ */

$(document).ready(function () {
  $('#checking .deposit').on('click', function () {
    depositInput = $('#checking .input').val()
    $('#checking .balance').text('$' + depositInput)
    console.log(depositInput)
  })
})
