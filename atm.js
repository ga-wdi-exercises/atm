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

/* returns 'deposit' or 'withdrawal' */
  function getTransactionType ($el) {
    return $el.attr('class')
  }

/* checks for the type of transaction and sends it to the proper function */
  function changeBalance (type, input, currentBalance, $el) {
    var inputAsNumber
    // convert input to number
    if (isNumber(input)) {
      inputAsNumber = parseInt(input)

      var balance

      // perform transaction
      if (type === 'deposit') {
        balance = makeDeposit(inputAsNumber, currentBalance, $el)
      } else if (type === 'withdraw') {
        balance = makeWithdrawal(inputAsNumber, currentBalance, $el)
      }

      // The color of a bank account should reflect its balance
      changeColor(balance, $el.parent())

      // remove error if any
      if (balance !== -1) {
        $('.error').remove()
      }
    } else {
      addErrorMessage()
    }
  }

  /* add to balance */
  function makeDeposit (amount, currentBalance, $el) {
    var result = currentBalance + amount

    $el.siblings('.balance').text(`\n$${result}`)

    return result
  }

/* withdrawal from balance */
  function makeWithdrawal (amount, currentBalance, $el) {
    // overdraft protection
    var result

    // check if overdraft needed
    if (currentBalance - amount < 0) {
      var otherType = $el.parent().attr('id') === 'checking' ? 'savings' : 'checking'

      var $otherAccount = $(`#${otherType}`)

      result = overdraft(amount, currentBalance, $el, $otherAccount)
    } else {
      result = currentBalance - amount

      $el.siblings('.balance').text(`\n$${result}`)
    }

    return result
  }

/* handles overdrafting */
  function overdraft (amount, balance, $el, $otherAccount) {
    var otherBalance = parseInt($otherAccount.children('.input').val().replace('$', ''))

    // If a withdrawal can be covered by the balances
    if (otherBalance + balance >= amount) {
      // in both accounts, bring the withdrawn-from account
      // down to $0 and take the remainder from the other account.
      makeWithdrawal(balance, balance, $el)
      makeWithdrawal(amount - balance, otherBalance, $otherAccount.children('.input'))
    } else {
      // If the withdrawn amount is more than the combined
      // account balance, display an error.
      addErrorMessage()
      return -1
    }

    return 0
  }

/* adds and removes the zero class if possible */
  function changeColor (balance, $el) {
    if (balance === 0) {
      $el.addClass('zero')
    } else {
      $el.removeClass('zero')
    }
  }

  // get all inputs of type='button' and add a listener
  var buttons = $('input:button')

  buttons.on('click', function () {
    var $self = $(this)
    // get the current balance as a number without '$'
    var currentBalance = parseInt($self.siblings('.balance').text().replace('$', ''))
    // get the user's input
    var input = $self.siblings('.input').val()
    // get the tranaction id
    var type = getTransactionType($self)
    // update the balance
    changeBalance(type, input, currentBalance, $self)
  }) // end event listener
}) // end ready
