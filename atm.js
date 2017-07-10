/* global $ */

$(document).ready(function () {
  $('.deposit').on('click', function () {
    var currentBalance = parseInt($(this).siblings('.balance').text().replace('$', ''))
    console.log('currentBalance=' + currentBalance)

    var input = $(this).siblings('.input').val()
    console.log('input=' + input)

    var number

    function isNumber (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }

    if (isNumber(input)) {
      number = parseInt(input)
      $(this).siblings('.balance').text(`\n$${number + currentBalance}`)
      $('.error').remove()
    } else {
      var errorMessage = $('<div class="error"></div>')
      errorMessage.text('invalid number, enter an amount')
      errorMessage.css('color', 'red')
      errorMessage.appendTo($('.header'))
    }

  }) // end event listener

  //$('.balance').attr('class', 'balance zero')

  $('#savings .withdraw').on('click', function () {
  console.log('hello')

  })




}) // end ready




// On "Withdraw", it updates the balance
// Follow the same steps as before, except you're subtracting instead of adding

// Refactor the existing code
// Challenge: Try to have no function() that's longer than 5 lines. (Sandi Metz's Rule 2)
