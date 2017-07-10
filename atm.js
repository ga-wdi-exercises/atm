/* global $ */

$(document).ready(function () {
  // check if a number
  function isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  function addErrorMessage () {
    var errorMessage = $('<div class="error"></div>')
    errorMessage.text('invalid amount')
    errorMessage.css('color', 'red')
    errorMessage.appendTo($('.header'))
  }

  function makeDeposit (input, currentBalance, $self) {
    var inputAsNumber
    if (isNumber(input)) {
      inputAsNumber = parseInt(input)
      $self.siblings('.balance').text(`\n$${currentBalance + inputAsNumber}`)
      $('.error').remove()
    } else {
      addErrorMessage()
    }
  }

  function makeWithdrawal (input, currentBalance, $self) {
    var inputAsNumber
    if (isNumber(input)) {
      inputAsNumber = parseInt(input)
      $self.siblings('.balance').text(`\n$${currentBalance - inputAsNumber}`)
      $('.error').remove()
    } else {
      addErrorMessage()
    }
  }

  $('.deposit').on('click', function () {
    var $self = $(this)
    // get the current balance as a number without '$'
    var currentBalance = parseInt($self.siblings('.balance').text().replace('$', ''))
    console.log('currentBalance=' + currentBalance)

    // get the user's input
    var input = $self.siblings('.input').val()
    console.log('input=' + input)

    makeDeposit(input, currentBalance, $self)
  }) // end event listener

  $('.withdraw').on('click', function () {
    var $self = $(this)
    // get the current balance as a number without '$'
    var currentBalance = parseInt($self.siblings('.balance').text().replace('$', ''))
    console.log('currentBalance=' + currentBalance)

    // get the user's input
    var input = $self.siblings('.input').val()
    console.log('input=' + input)

    makeWithdrawal(input, currentBalance, $self)
  }) // end event listener

  // $('.balance').attr('class', 'balance zero')
}) // end ready
