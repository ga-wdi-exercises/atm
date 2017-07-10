/* global $ */

$(document).ready(function () {
  $('body').css('background-color', 'red')

  $('#checking .deposit').on('click', function () {
    var input = $('#checking .input').val()
    $('#checking .balance').text(`\n$${input}`)
    console.log(input)
  })
})
