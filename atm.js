/* global $ */

$(document).ready(function () {
  $('#checking .deposit').on('click', function () {
    depositInput = $('#checking .input').val()
    console.log(depositInput)
  })
})
