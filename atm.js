/* global $ */

$(document).ready(function () {
  $('#checking .deposit').on('click', function () {
    var currentBalance = parseInt($('#checking .balance').text().replace('$', ''))
    console.log(currentBalance)

    var input = $('#checking .input').val()
    var number

    function isNumber (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }

    if (isNumber(input)) {
      number = parseInt(input)
      $('#checking .balance').text(`\n$${number + currentBalance}`)
      $('.error').remove()
    } else {
      var errorMessage = $('<div class="error"></div>')
      errorMessage.text('invalid number, enter an amount')
      errorMessage.css('color', 'red')
      errorMessage.appendTo($('.header'))
    }
    console.log(input)
  })
})

// On "Deposit", it updates the balance
// Now add the user input to the balance, and make it show up in the "balance" element

// On "Withdraw", it updates the balance
// Follow the same steps as before, except you're subtracting instead of adding

// Refactor the existing code
// Challenge: Try to have no function() that's longer than 5 lines. (Sandi Metz's Rule 2)
