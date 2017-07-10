/* global $ */

function getCheckBalance () {
  var checkingBalance = $('#checking .balance').text()
  checkingBalance = parseInt((checkingBalance.slice(1, checkingBalance.length)))
  return checkingBalance
}

function getCheckInput () {
  var input = $('#checking .input').val()
  input = parseInt(input)
  if (isNaN(input)) {
    input = 0
  }
  return input
}

function getSaveBalance () {
  var savingsBalance = $('#savings .balance').text()
  savingsBalance = parseInt((savingsBalance.slice(1, savingsBalance.length)))
  return savingsBalance
}

function getSaveInput () {
  var input = $('#savings .input').val()
  input = parseInt(input)
  if (isNaN(input)) {
    input = 0
  }
  return input
}

function updateBalanceCheck (balance, input) {
  if (balance + input < 0) {
    var newBalance = borrowCheck(input)
    return newBalance
  } else {
    return balance + input
  }
}

function borrowCheck (input) {
  var checkingTotal = getCheckBalance()
  var savingsTotal = getSaveBalance()
  var totalMoney = checkingTotal + savingsTotal
  var overdraft = 0
  var savingsAfterOverdraft = 0
  if (totalMoney + input > 0) {
    overdraft = input + checkingTotal
    savingsAfterOverdraft = overdraft + savingsTotal
    checkingTotal = 0
    $('#savings .balance').text('$' + savingsAfterOverdraft)
    return (checkingTotal)
  } else {
    return 0
  }
}

function updateBalanceSave (balance, input) {
  if (balance + input < 0) {
    var newBalance = borrowSave(input)
    return newBalance
  } else {
    return balance + input
  }
}

function borrowSave (input) {
  var checkingTotal = getCheckBalance()
  var savingsTotal = getSaveBalance()
  var totalMoney = checkingTotal + savingsTotal
  var overdraft = 0
  var checkingAfterOverdraft = 0
  if (totalMoney + input > 0) {
    overdraft = input + savingsTotal
    checkingAfterOverdraft = overdraft + checkingTotal
    savingsTotal = 0
    $('#checking .balance').text('$' + checkingAfterOverdraft)
    return (savingsTotal)
  } else {
    return 0
  }
}

function zeroChecking (balance) {
  if (balance === 0) {
    $('#checking .balance').addClass('zero')
  } else if (balance > 0) {
    $('#checking .balance').removeClass('zero')
  }
}

function zeroSavings (balance) {
  if (balance === 0) {
    $('#savings .balance').addClass('zero')
  } else if (balance > 0) {
    $('#savings .balance').removeClass('zero')
  }
}

$(document).ready(function () {
  // Checking Deposit
  $('#checking .deposit').on('click', function () {
    // get deposit input
    var depositChecking = getCheckInput()
    // get current balance
    var checkingBalance = getCheckBalance()
    // update balance
    var balance = updateBalanceCheck(checkingBalance, depositChecking)
    $('#checking .balance').text('$' + balance)
    zeroChecking(balance)
  })

  // Checking Withdraw
  $('#checking .withdraw').on('click', function () {
    // get withdraw input
    var withdrawChecking = getCheckInput() * (-1)
    // get current balance
    var checkingBalance = getCheckBalance()
    // update balance
    var balance = updateBalanceCheck(checkingBalance, withdrawChecking)
    $('#checking .balance').text('$' + balance)
    zeroChecking(balance)
  })

  // Savings Deposit
  $('#savings .deposit').on('click', function () {
    // get deposit input
    var depositSavings = getSaveInput()
    // get current balance
    var savingsBalance = getSaveBalance()
    // update balance
    var balance = updateBalanceSave(savingsBalance, depositSavings)
    $('#savings .balance').text('$' + balance)
    zeroSavings(balance)
  })

  // Savings Withdraw
  $('#savings .withdraw').on('click', function () {
    // get withdraw input
    var withdrawSavings = getSaveInput() * (-1)
    // get current balance
    var savingsBalance = getSaveBalance()
    // update balance
    var balance = updateBalanceSave(savingsBalance, withdrawSavings)
    $('#savings .balance').text('$' + balance)
    zeroSavings(balance)
  })
})
