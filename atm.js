/* global $ */

$(document).ready(function () {
  /* check if a number */
  function isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

/* Informs the user they inputed an invalid amount */
  function addErrorMessage () {
    var errorMessage = $('<div class="error"></div>')
    errorMessage.text('invalid amount')
    errorMessage.css('color', 'red')
    errorMessage.appendTo($('.header'))
  }

/* returns 'deposit' or 'withdrawal'*/
  function getTransactionType ($el) {
    return $el.attr('class')
  }

/* checks for the type of transaction and sends it to the proper function */
  function changeBalance (type, input, currentBalance, $el) {
    var inputAsNumber

    // convert input to number
    if (isNumber(input)) {
      inputAsNumber = parseInt(input)
      // perform transaction
      if (type === 'deposit') {
        makeDeposit(inputAsNumber, currentBalance, $el)
      } else if (type === 'withdraw') {
        makeWithdrawal(inputAsNumber, currentBalance, $el)
      }
      // remove error if any
      $('.error').remove()
    } else {
      addErrorMessage()
    }
  }

  /* add to balance */
  function makeDeposit (amount, currentBalance, $el) {
    var result = currentBalance + amount

    $el.siblings('.balance').text(`\n$${result}`)
  }

/* withdrawal from balance */
  function makeWithdrawal (amount, currentBalance, $el) {
    var result = currentBalance - amount

    $el.siblings('.balance').text(`\n$${result}`)
  }

  // get all inputs of type='button' and add a listener
  var buttons = $("input:button")

  buttons.on('click', function () {
    var $self = $(this)
    // get the current balance as a number without '$'
    var currentBalance = parseInt($self.siblings('.balance').text().replace('$', ''))
    console.log('currentBalance=' + currentBalance)

    // get the user's input
    var input = $self.siblings('.input').val()
    console.log('input=' + input)
    // get the tranaction id
    var type = getTransactionType($self)
    changeBalance(type, input, currentBalance, $self)
  }) // end event listener

  // $('.balance').attr('class', 'balance zero')
}) // end ready
